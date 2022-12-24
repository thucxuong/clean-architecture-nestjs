import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Author, Genre } from "./";
import { IBook } from "src/core";

export type BookDocument = Book & Document;

@Schema()
export class Book implements IBook {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true })
  author: Author;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true })
  genre: Genre;

  @Prop()
  publishDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
BookSchema.virtual("id").get(function () {
  return this._id.toString();
});
