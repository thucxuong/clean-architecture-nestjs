import { Book } from "src/core";

export abstract class ICrmServices {
  abstract bookAdded(book: Book): Promise<boolean>;
}
