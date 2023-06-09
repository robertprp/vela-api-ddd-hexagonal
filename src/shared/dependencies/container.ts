import 'reflect-metadata'
import {ContainerBuilder} from 'diod'

import {sharedDependencies} from '../sharedDependencies'

const builder = new ContainerBuilder()
// Shared dependencies
sharedDependencies(builder)

// TODO: import user dependencies here

export const container = builder.build()
