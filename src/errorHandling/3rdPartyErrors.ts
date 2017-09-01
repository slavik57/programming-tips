// The video for this file:
// https://youtu.be/ji1-TtqFy7Q

const some3rdParty = {
  doStuff: () => { throw Error('not initialized'); }
}

export class NotInitializedError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class Some3rdPartyWrapper {
  public doStuff() {
    try {
      some3rdParty.doStuff();
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(error: any) {
    if (error instanceof Error && error.message === 'not initialized') {
      throw new NotInitializedError('some3rdParty is not initized');
    }
  }
} 