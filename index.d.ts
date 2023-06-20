import mongoose from "mongoose";


import mongoose from 'mongoose'
import Chai from 'chai'
import express from 'express'

declare global {
  // Globals
  type Nullable<T> = T | null
  type DatabaseSession = Nullable<mongoose.ClientSession>
  type InferSchema<T> = mongoose.InferSchemaType<T> & {
    _id: ObjectId
    created: Date
    updated: Date
  }

  // Express specific
  type Request = express.Request
  type Response = express.Response
  type NextFunction = express.NextFunction
  // TODO: This should extend with the user model when we have it in typescript
  type AuthenticatedRequest = Request & {
    user: {
      _id: ObjectId
    }
  }

  // Testing
  const expect: Chai.ExpectStatic
}

export type ObjectId = string | mongoose.Types.ObjectId;
