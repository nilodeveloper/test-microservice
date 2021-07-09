import * as mongoose from 'mongoose';

export const MongoProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admin:admin@dev.e4dnk.mongodb.net/db-provider?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
      ),
  },
];
