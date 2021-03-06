#!/usr/bin/env bash

set -e;

if [ ! -f package.json ]; then
  echo "there is no package.json file in your PWD." >&2;
  false; // since there is no package.json file, probably should abort here
fi


map="$docker_r2g_fs_map"
search_root="$docker_r2g_search_root"
shared="$docker_r2g_shared_dir";
name="$docker_r2g_package_name"  # your project's package.json name field
base_image="node:$r2g_node_version"


container="docker_r2g.$name";
docker stop "$container" || echo "no container with name $container running."
docker rm "$container" || echo "no container with name $container could be removed."

tag="docker_r2g_image/$name";

docker build \
    -f Dockerfile.r2g \
    -t "$tag" \
    --build-arg base_image="$base_image" \
    --build-arg CACHEBUST="$(date +%s)" .


docker run \
    -v "$search_root:$shared:ro"  \
    -e docker_r2g_fs_map="$map" \
    -e dkr2g_run_args=""   \
    -e r2g_container_id="$container" \
    --entrypoint "dkr2g" \
    --name "$container" "$tag" \
      run --allow-unknown "$@"



## to debug:
# docker exec -ti <container-name> /bin/bash
