#!/bin/bash

# This file is executed on Azure App Service to start the application
# It's configured as the start command for the container within Settings > Configuration > General settings

# If PORT is not set default to 3000
if [ -z $PORT ]
then
  port="3000"
else
  port=$PORT
fi

# Only install "dependencies" from package.json
# npm ci --production

# Run the server on the port
tar -xzvf node_modules.tar.gz -C ../
rm node_modules.tar.gz
npm run start