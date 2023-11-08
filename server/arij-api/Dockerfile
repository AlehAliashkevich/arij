###################
# INSTALL LERNA FOR LOCAL DEVELOPMENT
###################

FROM node:18.15.0 As lerna

COPY --chown=root:root package*.json /usr/src/app/
COPY --chown=root:root lerna.json /usr/src/app/
COPY --chown=root:root tsconfig.json /usr/src/app/

COPY --chown=root:root shared/arij-common /usr/src/app/shared/arij-common
COPY --chown=root:root server/arij-api /usr/src/app/server/arij-api

RUN cd /usr/src/app/ && npm i --ignore-scripts
RUN cd /usr/src/app/ && npx lerna bootstrap

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18.15.0 As development

WORKDIR /usr/src/app

COPY --chown=node:node --from=lerna /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=lerna /usr/src/app/package*.json /usr/src/app/
COPY --chown=node:node --from=lerna /usr/src/app/lerna.json /usr/src/app/
COPY --chown=node:node --from=lerna /usr/src/app/tsconfig.json /usr/src/app/
COPY --chown=node:node --from=lerna /usr/src/app/shared/ /usr/src/app/shared/
COPY --chown=node:node --from=lerna /usr/src/app/server/ /usr/src/app/server/

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18.15.0 As build

WORKDIR /usr/src/app

COPY --chown=node:node --from=lerna /usr/src/app/ .

WORKDIR /usr/src/app/server/arij-api/

RUN npm run build

ENV NODE_ENV production

USER node

###################
# PRODUCTION
###################

FROM node:18.15.0 As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/package*.json /usr/src/app/
COPY --chown=node:node --from=lerna /usr/src/app/shared/ /usr/src/app/shared/
WORKDIR /usr/src/app/server/arij-api/
COPY --chown=node:node --from=build /usr/src/app/server/arij-api/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/server/arij-api/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
