import { Book, ICrmServices } from "src/core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SalesforceService implements ICrmServices {
  bookAdded(book: Book): Promise<boolean> {
    // Implement salesforce api logic

    return Promise.resolve(true);
  }
}
