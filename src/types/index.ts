import { CustomScalar, Scalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind, ValueNode } from 'graphql';
import { ObjectId } from 'mongodb';


@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'A custom Date scalar type';

  parseValue(val: number): Date {
    return new Date(val); // value from a client
  }

  serialize(val: Date): number {
    return val.getTime(); // value sent to client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}

/* to create custom scalars; instantiate the GraphQLScalarType  */

export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Mongo object id scalar type',
  parseValue(val: string) {
    return new ObjectId(val); // val from client input
  },
  serialize(val: ObjectId) {
    return val.toHexString(); // val sent to client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectIdScalar(ast.value); // val from the client query
    }
    return null;
  },
});


