import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IAuthor } from "src/core";

export type AuthorDocument = Author & Document;

@Schema()
export class Author implements IAuthor {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
