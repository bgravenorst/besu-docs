---
title: Specify NAT method
sidebar_position: 4
description: Configuring NAT with Besu
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Specify the NAT method

Use the [`--nat-method`](../../reference/options.md#nat-method) option to specify the NAT method.
Options are: [`UPNP`](#upnp), [`DOCKER`](#docker), [`AUTO`](#auto), and [`NONE`](#none).

The [enode](../../concepts/node-keys.md#enode-url) advertised to other nodes during discovery is
the external IP address and port.
The [`admin_nodeInfo`](../../reference/api/admin.md#admin_nodeinfo) JSON-RPC API method returns
the external address and port for the `enode` and `listenAddr` properties.

[`--nat-method`](../../reference/options.md#nat-method) `UPNP` and `DOCKER` apply to the primary
advertised host, which is typically IPv4.
For dual-stack IPv6 advertised addresses, set
[`--p2p-host-ipv6`](../../reference/options.md#p2p-host-ipv6) or allow discovery v5 peer consensus.
See [IPv6 and dual-stack networking](../../concepts/ipv6-dual-stack.md).

While Besu is running, the following are not supported:

- IP address changes
- Changing NAT methods. To change the NAT method, restart the node with the [`--nat-method`](../../reference/options.md#nat-method) option set.

## Auto

`AUTO` detects if Besu is running inside a Docker container.
If Besu is running in a Docker container, `AUTO` sets to [`DOCKER`](#docker).
If Besu is not running in a Docker container, `AUTO` sets to [`NONE`](#none).

`AUTO` is the default NAT method.

:::tip

If automatic detection fails, set the IP and ports in [`NONE`](#none) mode.

:::

## UPnP

Specify `UPNP` to quickly allow inbound peer connections without manual router configuration. Use UPnP in home or small office environments where a wireless router or modem provides NAT isolation.

UPnP automatically detects if a node is running in a UPnP environment and provides port forwarding. UPnP might introduce delays during node startup, especially on networks without a UPnP gateway device.

Use `UPNPP2PONLY` if you wish to enable UPnP only for p2p traffic.

:::tip

UPnP support is often disabled by default in networking firmware. If disabled by default, you must explicitly enable UPnP support.

:::

:::info

When the NAT method is set to `UPNP`, the advertised port is the same as the [listening port](../../reference/options.md#p2p-port).

:::

## Docker

Specify `DOCKER` when Besu runs inside a Docker container.
Besu advertises the host IP address, not the container IP address.
`AUTO` already selects `DOCKER` when Besu detects a container, so these settings also apply with
the default NAT method.

Publish container ports with [`docker run -p`](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose).
Docker NAT does not create those mappings for you.

### Advertise the host IP

Besu resolves the advertised host by looking up the hostname `HOST_IP`.
Add that hostname to the container hosts file with the IP address other peers can reach.
Use the public IP (or the LAN IP, if peers are only on that network).
Do not use the container IP, the Docker bridge IP (for example `172.17.0.1`), or `127.0.0.1`.

<Tabs>
<TabItem value="docker-run" label="Docker run" default>

```bash
docker run --add-host=HOST_IP:<EXTERNAL_IP> -p 30303:30303 hyperledger/besu:latest
```

</TabItem>
<TabItem value="compose" label="Compose">

```yaml
services:
  besu:
    extra_hosts:
      - "HOST_IP:<EXTERNAL_IP>"
    ports:
      - "30303:30303"
```

</TabItem>
</Tabs>

See the [`docker run --add-host` documentation](https://docs.docker.com/engine/reference/commandline/run/#add-entries-to-container-hosts-file---add-host).

If `HOST_IP` is missing or not resolvable, Besu uses [`--p2p-host`](../../reference/options.md#p2p-host).
The default `--p2p-host` is `127.0.0.1`, so the node can start and still advertise localhost.
Other peers cannot dial that address. Set `HOST_IP` (or set `--p2p-host` to a reachable address).

### Report host-mapped ports

If the host port differs from the container port, set the `HOST_PORT_<internal-port>` environment
variable to the host port.
Besu uses this value in [`admin_nodeInfo`](../../reference/api/admin.md#admin_nodeinfo) for the
`enode`, `listenAddr`, and `ports` fields.

The `<internal-port>` in the variable name is the port Besu bound inside the container.
If you set [`--p2p-port=0`](../../reference/options.md#p2p-port), use the port Besu actually bound,
not `0`.

This override does not change the ports Besu writes into the local enode used for discovery.

<Tabs>
<TabItem value="docker-run-port" label="Docker run" default>

```bash
docker run --add-host=HOST_IP:<EXTERNAL_IP> -p 50303:30303 \
  -e HOST_PORT_30303=50303 hyperledger/besu:latest
```

</TabItem>
<TabItem value="compose-port" label="Compose">

```yaml
services:
  besu:
    extra_hosts:
      - "HOST_IP:<EXTERNAL_IP>"
    environment:
      HOST_PORT_30303: "50303"
    ports:
      - "50303:30303"
```

</TabItem>
</Tabs>

## None

Specify `NONE` to explicitly configure the external IP address and ports advertised using:

- [`--p2p-host`](../../reference/options.md#p2p-host) and [`--p2p-port`](../../reference/options.md#p2p-port) for the P2P service.
- [`--rpc-http-host`](../../reference/options.md#rpc-http-host) and [`--rpc-http-port`](../../reference/options.md#rpc-http-port) for the JSON-RPC HTTP service.

The P2P and JSON-RPC HTTP hosts and ports are advertised in the [`net_services`](../../reference/api/net.md#net_services) method.

:::tip

When the NAT method is set to `NONE`, the advertised port is the same as the [listening port](../../reference/options.md#p2p-port).

:::
