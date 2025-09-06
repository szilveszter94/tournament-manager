
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model PlayerTournament
 * 
 */
export type PlayerTournament = $Result.DefaultSelection<Prisma.$PlayerTournamentPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentElimination
 * 
 */
export type TournamentElimination = $Result.DefaultSelection<Prisma.$TournamentEliminationPayload>
/**
 * Model TournamentGroup
 * 
 */
export type TournamentGroup = $Result.DefaultSelection<Prisma.$TournamentGroupPayload>
/**
 * Model TournamentWinner
 * 
 */
export type TournamentWinner = $Result.DefaultSelection<Prisma.$TournamentWinnerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KnockoutMatchType: {
  None: 'None',
  Final: 'Final',
  SemiFinal: 'SemiFinal',
  ThirdPlace: 'ThirdPlace'
};

export type KnockoutMatchType = (typeof KnockoutMatchType)[keyof typeof KnockoutMatchType]


export const TournamentStat: {
  Setup: 'Setup',
  FirstRounds: 'FirstRounds',
  NormalEliminations: 'NormalEliminations',
  DoubleEliminations: 'DoubleEliminations',
  Over: 'Over'
};

export type TournamentStat = (typeof TournamentStat)[keyof typeof TournamentStat]


export const EliminationType: {
  Knockout: 'Knockout',
  Double: 'Double'
};

export type EliminationType = (typeof EliminationType)[keyof typeof EliminationType]

}

export type KnockoutMatchType = $Enums.KnockoutMatchType

export const KnockoutMatchType: typeof $Enums.KnockoutMatchType

export type TournamentStat = $Enums.TournamentStat

export const TournamentStat: typeof $Enums.TournamentStat

export type EliminationType = $Enums.EliminationType

export const EliminationType: typeof $Enums.EliminationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Matches
 * const matches = await prisma.match.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Matches
   * const matches = await prisma.match.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTournament`: Exposes CRUD operations for the **PlayerTournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTournaments
    * const playerTournaments = await prisma.playerTournament.findMany()
    * ```
    */
  get playerTournament(): Prisma.PlayerTournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentElimination`: Exposes CRUD operations for the **TournamentElimination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentEliminations
    * const tournamentEliminations = await prisma.tournamentElimination.findMany()
    * ```
    */
  get tournamentElimination(): Prisma.TournamentEliminationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentGroup`: Exposes CRUD operations for the **TournamentGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentGroups
    * const tournamentGroups = await prisma.tournamentGroup.findMany()
    * ```
    */
  get tournamentGroup(): Prisma.TournamentGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentWinner`: Exposes CRUD operations for the **TournamentWinner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentWinners
    * const tournamentWinners = await prisma.tournamentWinner.findMany()
    * ```
    */
  get tournamentWinner(): Prisma.TournamentWinnerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Match: 'Match',
    Player: 'Player',
    PlayerTournament: 'PlayerTournament',
    Tournament: 'Tournament',
    TournamentElimination: 'TournamentElimination',
    TournamentGroup: 'TournamentGroup',
    TournamentWinner: 'TournamentWinner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "match" | "player" | "playerTournament" | "tournament" | "tournamentElimination" | "tournamentGroup" | "tournamentWinner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      PlayerTournament: {
        payload: Prisma.$PlayerTournamentPayload<ExtArgs>
        fields: Prisma.PlayerTournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          findFirst: {
            args: Prisma.PlayerTournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          findMany: {
            args: Prisma.PlayerTournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>[]
          }
          create: {
            args: Prisma.PlayerTournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          createMany: {
            args: Prisma.PlayerTournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerTournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>[]
          }
          delete: {
            args: Prisma.PlayerTournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          update: {
            args: Prisma.PlayerTournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerTournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>[]
          }
          upsert: {
            args: Prisma.PlayerTournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTournamentPayload>
          }
          aggregate: {
            args: Prisma.PlayerTournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTournament>
          }
          groupBy: {
            args: Prisma.PlayerTournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTournamentCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTournamentCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      TournamentElimination: {
        payload: Prisma.$TournamentEliminationPayload<ExtArgs>
        fields: Prisma.TournamentEliminationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentEliminationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentEliminationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          findFirst: {
            args: Prisma.TournamentEliminationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentEliminationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          findMany: {
            args: Prisma.TournamentEliminationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>[]
          }
          create: {
            args: Prisma.TournamentEliminationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          createMany: {
            args: Prisma.TournamentEliminationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentEliminationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>[]
          }
          delete: {
            args: Prisma.TournamentEliminationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          update: {
            args: Prisma.TournamentEliminationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          deleteMany: {
            args: Prisma.TournamentEliminationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentEliminationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentEliminationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>[]
          }
          upsert: {
            args: Prisma.TournamentEliminationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEliminationPayload>
          }
          aggregate: {
            args: Prisma.TournamentEliminationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentElimination>
          }
          groupBy: {
            args: Prisma.TournamentEliminationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentEliminationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentEliminationCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentEliminationCountAggregateOutputType> | number
          }
        }
      }
      TournamentGroup: {
        payload: Prisma.$TournamentGroupPayload<ExtArgs>
        fields: Prisma.TournamentGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          findFirst: {
            args: Prisma.TournamentGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          findMany: {
            args: Prisma.TournamentGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>[]
          }
          create: {
            args: Prisma.TournamentGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          createMany: {
            args: Prisma.TournamentGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>[]
          }
          delete: {
            args: Prisma.TournamentGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          update: {
            args: Prisma.TournamentGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          deleteMany: {
            args: Prisma.TournamentGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>[]
          }
          upsert: {
            args: Prisma.TournamentGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentGroupPayload>
          }
          aggregate: {
            args: Prisma.TournamentGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentGroup>
          }
          groupBy: {
            args: Prisma.TournamentGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupCountAggregateOutputType> | number
          }
        }
      }
      TournamentWinner: {
        payload: Prisma.$TournamentWinnerPayload<ExtArgs>
        fields: Prisma.TournamentWinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentWinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentWinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          findFirst: {
            args: Prisma.TournamentWinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentWinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          findMany: {
            args: Prisma.TournamentWinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>[]
          }
          create: {
            args: Prisma.TournamentWinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          createMany: {
            args: Prisma.TournamentWinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentWinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>[]
          }
          delete: {
            args: Prisma.TournamentWinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          update: {
            args: Prisma.TournamentWinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          deleteMany: {
            args: Prisma.TournamentWinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentWinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentWinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>[]
          }
          upsert: {
            args: Prisma.TournamentWinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentWinnerPayload>
          }
          aggregate: {
            args: Prisma.TournamentWinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentWinner>
          }
          groupBy: {
            args: Prisma.TournamentWinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentWinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentWinnerCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentWinnerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    match?: MatchOmit
    player?: PlayerOmit
    playerTournament?: PlayerTournamentOmit
    tournament?: TournamentOmit
    tournamentElimination?: TournamentEliminationOmit
    tournamentGroup?: TournamentGroupOmit
    tournamentWinner?: TournamentWinnerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    TournamentElimination: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TournamentElimination?: boolean | MatchCountOutputTypeCountTournamentEliminationArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountTournamentEliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEliminationWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    TournamentWinner: number
    WinnersByeEliminations: number
    LosersByeEliminations: number
    PlayerTournament: number
    MatchPlayer1: number
    MatchPlayer2: number
    MatchWinner: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TournamentWinner?: boolean | PlayerCountOutputTypeCountTournamentWinnerArgs
    WinnersByeEliminations?: boolean | PlayerCountOutputTypeCountWinnersByeEliminationsArgs
    LosersByeEliminations?: boolean | PlayerCountOutputTypeCountLosersByeEliminationsArgs
    PlayerTournament?: boolean | PlayerCountOutputTypeCountPlayerTournamentArgs
    MatchPlayer1?: boolean | PlayerCountOutputTypeCountMatchPlayer1Args
    MatchPlayer2?: boolean | PlayerCountOutputTypeCountMatchPlayer2Args
    MatchWinner?: boolean | PlayerCountOutputTypeCountMatchWinnerArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountTournamentWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWinnerWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountWinnersByeEliminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEliminationWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountLosersByeEliminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEliminationWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayerTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTournamentWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    TournamentWinner: number
    TournamentElimination: number
    TournamentGroup: number
    PlayerTournament: number
    Match: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TournamentWinner?: boolean | TournamentCountOutputTypeCountTournamentWinnerArgs
    TournamentElimination?: boolean | TournamentCountOutputTypeCountTournamentEliminationArgs
    TournamentGroup?: boolean | TournamentCountOutputTypeCountTournamentGroupArgs
    PlayerTournament?: boolean | TournamentCountOutputTypeCountPlayerTournamentArgs
    Match?: boolean | TournamentCountOutputTypeCountMatchArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTournamentWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWinnerWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTournamentEliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEliminationWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTournamentGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentGroupWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountPlayerTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTournamentWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    player1Id: number | null
    player2Id: number | null
    winnerId: number | null
    serialNumber: number | null
    group: number | null
    knockoutRound: number | null
    nextMatchId: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    player1Id: number | null
    player2Id: number | null
    winnerId: number | null
    serialNumber: number | null
    group: number | null
    knockoutRound: number | null
    nextMatchId: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    player1Id: number | null
    player2Id: number | null
    winnerId: number | null
    serialNumber: number | null
    isOver: boolean | null
    group: number | null
    isKnockoutMatch: boolean | null
    knockoutRound: number | null
    knockoutMatchType: $Enums.KnockoutMatchType | null
    isDoubleEliminationMatch: boolean | null
    isWinnersBracketMatch: boolean | null
    nextMatchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    player1Id: number | null
    player2Id: number | null
    winnerId: number | null
    serialNumber: number | null
    isOver: boolean | null
    group: number | null
    isKnockoutMatch: boolean | null
    knockoutRound: number | null
    knockoutMatchType: $Enums.KnockoutMatchType | null
    isDoubleEliminationMatch: boolean | null
    isWinnersBracketMatch: boolean | null
    nextMatchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    tournamentId: number
    player1Id: number
    player2Id: number
    winnerId: number
    serialNumber: number
    isOver: number
    group: number
    isKnockoutMatch: number
    knockoutRound: number
    knockoutMatchType: number
    isDoubleEliminationMatch: number
    isWinnersBracketMatch: number
    nextMatchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    serialNumber?: true
    group?: true
    knockoutRound?: true
    nextMatchId?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
    tournamentId?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    serialNumber?: true
    group?: true
    knockoutRound?: true
    nextMatchId?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    tournamentId?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    serialNumber?: true
    isOver?: true
    group?: true
    isKnockoutMatch?: true
    knockoutRound?: true
    knockoutMatchType?: true
    isDoubleEliminationMatch?: true
    isWinnersBracketMatch?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    serialNumber?: true
    isOver?: true
    group?: true
    isKnockoutMatch?: true
    knockoutRound?: true
    knockoutMatchType?: true
    isDoubleEliminationMatch?: true
    isWinnersBracketMatch?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    tournamentId?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    serialNumber?: true
    isOver?: true
    group?: true
    isKnockoutMatch?: true
    knockoutRound?: true
    knockoutMatchType?: true
    isDoubleEliminationMatch?: true
    isWinnersBracketMatch?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: number
    tournamentId: number
    player1Id: number | null
    player2Id: number | null
    winnerId: number | null
    serialNumber: number | null
    isOver: boolean
    group: number | null
    isKnockoutMatch: boolean
    knockoutRound: number | null
    knockoutMatchType: $Enums.KnockoutMatchType
    isDoubleEliminationMatch: boolean
    isWinnersBracketMatch: boolean
    nextMatchId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    serialNumber?: boolean
    isOver?: boolean
    group?: boolean
    isKnockoutMatch?: boolean
    knockoutRound?: boolean
    knockoutMatchType?: boolean
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
    TournamentElimination?: boolean | Match$TournamentEliminationArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    serialNumber?: boolean
    isOver?: boolean
    group?: boolean
    isKnockoutMatch?: boolean
    knockoutRound?: boolean
    knockoutMatchType?: boolean
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    serialNumber?: boolean
    isOver?: boolean
    group?: boolean
    isKnockoutMatch?: boolean
    knockoutRound?: boolean
    knockoutMatchType?: boolean
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    serialNumber?: boolean
    isOver?: boolean
    group?: boolean
    isKnockoutMatch?: boolean
    knockoutRound?: boolean
    knockoutMatchType?: boolean
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "player1Id" | "player2Id" | "winnerId" | "serialNumber" | "isOver" | "group" | "isKnockoutMatch" | "knockoutRound" | "knockoutMatchType" | "isDoubleEliminationMatch" | "isWinnersBracketMatch" | "nextMatchId" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
    TournamentElimination?: boolean | Match$TournamentEliminationArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player1?: boolean | Match$Player1Args<ExtArgs>
    Player2?: boolean | Match$Player2Args<ExtArgs>
    Winner?: boolean | Match$WinnerArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs>
      Player1: Prisma.$PlayerPayload<ExtArgs> | null
      Player2: Prisma.$PlayerPayload<ExtArgs> | null
      Winner: Prisma.$PlayerPayload<ExtArgs> | null
      TournamentElimination: Prisma.$TournamentEliminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      player1Id: number | null
      player2Id: number | null
      winnerId: number | null
      serialNumber: number | null
      isOver: boolean
      group: number | null
      isKnockoutMatch: boolean
      knockoutRound: number | null
      knockoutMatchType: $Enums.KnockoutMatchType
      isDoubleEliminationMatch: boolean
      isWinnersBracketMatch: boolean
      nextMatchId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Player1<T extends Match$Player1Args<ExtArgs> = {}>(args?: Subset<T, Match$Player1Args<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Player2<T extends Match$Player2Args<ExtArgs> = {}>(args?: Subset<T, Match$Player2Args<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Winner<T extends Match$WinnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$WinnerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TournamentElimination<T extends Match$TournamentEliminationArgs<ExtArgs> = {}>(args?: Subset<T, Match$TournamentEliminationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'Int'>
    readonly tournamentId: FieldRef<"Match", 'Int'>
    readonly player1Id: FieldRef<"Match", 'Int'>
    readonly player2Id: FieldRef<"Match", 'Int'>
    readonly winnerId: FieldRef<"Match", 'Int'>
    readonly serialNumber: FieldRef<"Match", 'Int'>
    readonly isOver: FieldRef<"Match", 'Boolean'>
    readonly group: FieldRef<"Match", 'Int'>
    readonly isKnockoutMatch: FieldRef<"Match", 'Boolean'>
    readonly knockoutRound: FieldRef<"Match", 'Int'>
    readonly knockoutMatchType: FieldRef<"Match", 'KnockoutMatchType'>
    readonly isDoubleEliminationMatch: FieldRef<"Match", 'Boolean'>
    readonly isWinnersBracketMatch: FieldRef<"Match", 'Boolean'>
    readonly nextMatchId: FieldRef<"Match", 'Int'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.Player1
   */
  export type Match$Player1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Match.Player2
   */
  export type Match$Player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Match.Winner
   */
  export type Match$WinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Match.TournamentElimination
   */
  export type Match$TournamentEliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    where?: TournamentEliminationWhereInput
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    cursor?: TournamentEliminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    overallWins: number | null
    overallLosses: number | null
    group: number | null
    elo: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    overallWins: number | null
    overallLosses: number | null
    group: number | null
    elo: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    overallWins: number | null
    overallLosses: number | null
    group: number | null
    elo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    overallWins: number | null
    overallLosses: number | null
    group: number | null
    elo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    overallWins: number
    overallLosses: number
    group: number
    elo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    overallWins?: true
    overallLosses?: true
    group?: true
    elo?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    overallWins?: true
    overallLosses?: true
    group?: true
    elo?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    overallWins?: true
    overallLosses?: true
    group?: true
    elo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    overallWins?: true
    overallLosses?: true
    group?: true
    elo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    overallWins?: true
    overallLosses?: true
    group?: true
    elo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    overallWins: number
    overallLosses: number
    group: number | null
    elo: number
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    overallWins?: boolean
    overallLosses?: boolean
    group?: boolean
    elo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TournamentWinner?: boolean | Player$TournamentWinnerArgs<ExtArgs>
    WinnersByeEliminations?: boolean | Player$WinnersByeEliminationsArgs<ExtArgs>
    LosersByeEliminations?: boolean | Player$LosersByeEliminationsArgs<ExtArgs>
    PlayerTournament?: boolean | Player$PlayerTournamentArgs<ExtArgs>
    MatchPlayer1?: boolean | Player$MatchPlayer1Args<ExtArgs>
    MatchPlayer2?: boolean | Player$MatchPlayer2Args<ExtArgs>
    MatchWinner?: boolean | Player$MatchWinnerArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    overallWins?: boolean
    overallLosses?: boolean
    group?: boolean
    elo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    overallWins?: boolean
    overallLosses?: boolean
    group?: boolean
    elo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    overallWins?: boolean
    overallLosses?: boolean
    group?: boolean
    elo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "overallWins" | "overallLosses" | "group" | "elo" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TournamentWinner?: boolean | Player$TournamentWinnerArgs<ExtArgs>
    WinnersByeEliminations?: boolean | Player$WinnersByeEliminationsArgs<ExtArgs>
    LosersByeEliminations?: boolean | Player$LosersByeEliminationsArgs<ExtArgs>
    PlayerTournament?: boolean | Player$PlayerTournamentArgs<ExtArgs>
    MatchPlayer1?: boolean | Player$MatchPlayer1Args<ExtArgs>
    MatchPlayer2?: boolean | Player$MatchPlayer2Args<ExtArgs>
    MatchWinner?: boolean | Player$MatchWinnerArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      TournamentWinner: Prisma.$TournamentWinnerPayload<ExtArgs>[]
      WinnersByeEliminations: Prisma.$TournamentEliminationPayload<ExtArgs>[]
      LosersByeEliminations: Prisma.$TournamentEliminationPayload<ExtArgs>[]
      PlayerTournament: Prisma.$PlayerTournamentPayload<ExtArgs>[]
      MatchPlayer1: Prisma.$MatchPayload<ExtArgs>[]
      MatchPlayer2: Prisma.$MatchPayload<ExtArgs>[]
      MatchWinner: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      overallWins: number
      overallLosses: number
      group: number | null
      elo: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TournamentWinner<T extends Player$TournamentWinnerArgs<ExtArgs> = {}>(args?: Subset<T, Player$TournamentWinnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WinnersByeEliminations<T extends Player$WinnersByeEliminationsArgs<ExtArgs> = {}>(args?: Subset<T, Player$WinnersByeEliminationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LosersByeEliminations<T extends Player$LosersByeEliminationsArgs<ExtArgs> = {}>(args?: Subset<T, Player$LosersByeEliminationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PlayerTournament<T extends Player$PlayerTournamentArgs<ExtArgs> = {}>(args?: Subset<T, Player$PlayerTournamentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchPlayer1<T extends Player$MatchPlayer1Args<ExtArgs> = {}>(args?: Subset<T, Player$MatchPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchPlayer2<T extends Player$MatchPlayer2Args<ExtArgs> = {}>(args?: Subset<T, Player$MatchPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchWinner<T extends Player$MatchWinnerArgs<ExtArgs> = {}>(args?: Subset<T, Player$MatchWinnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly overallWins: FieldRef<"Player", 'Int'>
    readonly overallLosses: FieldRef<"Player", 'Int'>
    readonly group: FieldRef<"Player", 'Int'>
    readonly elo: FieldRef<"Player", 'Int'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.TournamentWinner
   */
  export type Player$TournamentWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    where?: TournamentWinnerWhereInput
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    cursor?: TournamentWinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentWinnerScalarFieldEnum | TournamentWinnerScalarFieldEnum[]
  }

  /**
   * Player.WinnersByeEliminations
   */
  export type Player$WinnersByeEliminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    where?: TournamentEliminationWhereInput
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    cursor?: TournamentEliminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * Player.LosersByeEliminations
   */
  export type Player$LosersByeEliminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    where?: TournamentEliminationWhereInput
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    cursor?: TournamentEliminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * Player.PlayerTournament
   */
  export type Player$PlayerTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    where?: PlayerTournamentWhereInput
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    cursor?: PlayerTournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTournamentScalarFieldEnum | PlayerTournamentScalarFieldEnum[]
  }

  /**
   * Player.MatchPlayer1
   */
  export type Player$MatchPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Player.MatchPlayer2
   */
  export type Player$MatchPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Player.MatchWinner
   */
  export type Player$MatchWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model PlayerTournament
   */

  export type AggregatePlayerTournament = {
    _count: PlayerTournamentCountAggregateOutputType | null
    _avg: PlayerTournamentAvgAggregateOutputType | null
    _sum: PlayerTournamentSumAggregateOutputType | null
    _min: PlayerTournamentMinAggregateOutputType | null
    _max: PlayerTournamentMaxAggregateOutputType | null
  }

  export type PlayerTournamentAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
  }

  export type PlayerTournamentSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
  }

  export type PlayerTournamentMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerTournamentMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerTournamentCountAggregateOutputType = {
    id: number
    playerId: number
    tournamentId: number
    wins: number
    losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerTournamentAvgAggregateInputType = {
    id?: true
    playerId?: true
    tournamentId?: true
    wins?: true
    losses?: true
  }

  export type PlayerTournamentSumAggregateInputType = {
    id?: true
    playerId?: true
    tournamentId?: true
    wins?: true
    losses?: true
  }

  export type PlayerTournamentMinAggregateInputType = {
    id?: true
    playerId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerTournamentMaxAggregateInputType = {
    id?: true
    playerId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerTournamentCountAggregateInputType = {
    id?: true
    playerId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerTournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTournament to aggregate.
     */
    where?: PlayerTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTournaments to fetch.
     */
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTournaments
    **/
    _count?: true | PlayerTournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTournamentMaxAggregateInputType
  }

  export type GetPlayerTournamentAggregateType<T extends PlayerTournamentAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTournament[P]>
      : GetScalarType<T[P], AggregatePlayerTournament[P]>
  }




  export type PlayerTournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTournamentWhereInput
    orderBy?: PlayerTournamentOrderByWithAggregationInput | PlayerTournamentOrderByWithAggregationInput[]
    by: PlayerTournamentScalarFieldEnum[] | PlayerTournamentScalarFieldEnum
    having?: PlayerTournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTournamentCountAggregateInputType | true
    _avg?: PlayerTournamentAvgAggregateInputType
    _sum?: PlayerTournamentSumAggregateInputType
    _min?: PlayerTournamentMinAggregateInputType
    _max?: PlayerTournamentMaxAggregateInputType
  }

  export type PlayerTournamentGroupByOutputType = {
    id: number
    playerId: number
    tournamentId: number
    wins: number
    losses: number
    createdAt: Date
    updatedAt: Date
    _count: PlayerTournamentCountAggregateOutputType | null
    _avg: PlayerTournamentAvgAggregateOutputType | null
    _sum: PlayerTournamentSumAggregateOutputType | null
    _min: PlayerTournamentMinAggregateOutputType | null
    _max: PlayerTournamentMaxAggregateOutputType | null
  }

  type GetPlayerTournamentGroupByPayload<T extends PlayerTournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTournamentGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTournamentGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTournament"]>

  export type PlayerTournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTournament"]>

  export type PlayerTournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTournament"]>

  export type PlayerTournamentSelectScalar = {
    id?: boolean
    playerId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerTournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "tournamentId" | "wins" | "losses" | "createdAt" | "updatedAt", ExtArgs["result"]["playerTournament"]>
  export type PlayerTournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerTournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerTournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PlayerTournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTournament"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs>
      Player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      tournamentId: number
      wins: number
      losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerTournament"]>
    composites: {}
  }

  type PlayerTournamentGetPayload<S extends boolean | null | undefined | PlayerTournamentDefaultArgs> = $Result.GetResult<Prisma.$PlayerTournamentPayload, S>

  type PlayerTournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTournamentCountAggregateInputType | true
    }

  export interface PlayerTournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTournament'], meta: { name: 'PlayerTournament' } }
    /**
     * Find zero or one PlayerTournament that matches the filter.
     * @param {PlayerTournamentFindUniqueArgs} args - Arguments to find a PlayerTournament
     * @example
     * // Get one PlayerTournament
     * const playerTournament = await prisma.playerTournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTournamentFindUniqueArgs>(args: SelectSubset<T, PlayerTournamentFindUniqueArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTournamentFindUniqueOrThrowArgs} args - Arguments to find a PlayerTournament
     * @example
     * // Get one PlayerTournament
     * const playerTournament = await prisma.playerTournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentFindFirstArgs} args - Arguments to find a PlayerTournament
     * @example
     * // Get one PlayerTournament
     * const playerTournament = await prisma.playerTournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTournamentFindFirstArgs>(args?: SelectSubset<T, PlayerTournamentFindFirstArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentFindFirstOrThrowArgs} args - Arguments to find a PlayerTournament
     * @example
     * // Get one PlayerTournament
     * const playerTournament = await prisma.playerTournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTournaments
     * const playerTournaments = await prisma.playerTournament.findMany()
     * 
     * // Get first 10 PlayerTournaments
     * const playerTournaments = await prisma.playerTournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTournamentWithIdOnly = await prisma.playerTournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTournamentFindManyArgs>(args?: SelectSubset<T, PlayerTournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTournament.
     * @param {PlayerTournamentCreateArgs} args - Arguments to create a PlayerTournament.
     * @example
     * // Create one PlayerTournament
     * const PlayerTournament = await prisma.playerTournament.create({
     *   data: {
     *     // ... data to create a PlayerTournament
     *   }
     * })
     * 
     */
    create<T extends PlayerTournamentCreateArgs>(args: SelectSubset<T, PlayerTournamentCreateArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTournaments.
     * @param {PlayerTournamentCreateManyArgs} args - Arguments to create many PlayerTournaments.
     * @example
     * // Create many PlayerTournaments
     * const playerTournament = await prisma.playerTournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTournamentCreateManyArgs>(args?: SelectSubset<T, PlayerTournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerTournaments and returns the data saved in the database.
     * @param {PlayerTournamentCreateManyAndReturnArgs} args - Arguments to create many PlayerTournaments.
     * @example
     * // Create many PlayerTournaments
     * const playerTournament = await prisma.playerTournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerTournaments and only return the `id`
     * const playerTournamentWithIdOnly = await prisma.playerTournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerTournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerTournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerTournament.
     * @param {PlayerTournamentDeleteArgs} args - Arguments to delete one PlayerTournament.
     * @example
     * // Delete one PlayerTournament
     * const PlayerTournament = await prisma.playerTournament.delete({
     *   where: {
     *     // ... filter to delete one PlayerTournament
     *   }
     * })
     * 
     */
    delete<T extends PlayerTournamentDeleteArgs>(args: SelectSubset<T, PlayerTournamentDeleteArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTournament.
     * @param {PlayerTournamentUpdateArgs} args - Arguments to update one PlayerTournament.
     * @example
     * // Update one PlayerTournament
     * const playerTournament = await prisma.playerTournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTournamentUpdateArgs>(args: SelectSubset<T, PlayerTournamentUpdateArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTournaments.
     * @param {PlayerTournamentDeleteManyArgs} args - Arguments to filter PlayerTournaments to delete.
     * @example
     * // Delete a few PlayerTournaments
     * const { count } = await prisma.playerTournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTournamentDeleteManyArgs>(args?: SelectSubset<T, PlayerTournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTournaments
     * const playerTournament = await prisma.playerTournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTournamentUpdateManyArgs>(args: SelectSubset<T, PlayerTournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTournaments and returns the data updated in the database.
     * @param {PlayerTournamentUpdateManyAndReturnArgs} args - Arguments to update many PlayerTournaments.
     * @example
     * // Update many PlayerTournaments
     * const playerTournament = await prisma.playerTournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerTournaments and only return the `id`
     * const playerTournamentWithIdOnly = await prisma.playerTournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerTournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerTournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerTournament.
     * @param {PlayerTournamentUpsertArgs} args - Arguments to update or create a PlayerTournament.
     * @example
     * // Update or create a PlayerTournament
     * const playerTournament = await prisma.playerTournament.upsert({
     *   create: {
     *     // ... data to create a PlayerTournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTournament we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTournamentUpsertArgs>(args: SelectSubset<T, PlayerTournamentUpsertArgs<ExtArgs>>): Prisma__PlayerTournamentClient<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentCountArgs} args - Arguments to filter PlayerTournaments to count.
     * @example
     * // Count the number of PlayerTournaments
     * const count = await prisma.playerTournament.count({
     *   where: {
     *     // ... the filter for the PlayerTournaments we want to count
     *   }
     * })
    **/
    count<T extends PlayerTournamentCountArgs>(
      args?: Subset<T, PlayerTournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerTournamentAggregateArgs>(args: Subset<T, PlayerTournamentAggregateArgs>): Prisma.PrismaPromise<GetPlayerTournamentAggregateType<T>>

    /**
     * Group by PlayerTournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerTournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTournamentGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTournament model
   */
  readonly fields: PlayerTournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTournament model
   */
  interface PlayerTournamentFieldRefs {
    readonly id: FieldRef<"PlayerTournament", 'Int'>
    readonly playerId: FieldRef<"PlayerTournament", 'Int'>
    readonly tournamentId: FieldRef<"PlayerTournament", 'Int'>
    readonly wins: FieldRef<"PlayerTournament", 'Int'>
    readonly losses: FieldRef<"PlayerTournament", 'Int'>
    readonly createdAt: FieldRef<"PlayerTournament", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerTournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTournament findUnique
   */
  export type PlayerTournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTournament to fetch.
     */
    where: PlayerTournamentWhereUniqueInput
  }

  /**
   * PlayerTournament findUniqueOrThrow
   */
  export type PlayerTournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTournament to fetch.
     */
    where: PlayerTournamentWhereUniqueInput
  }

  /**
   * PlayerTournament findFirst
   */
  export type PlayerTournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTournament to fetch.
     */
    where?: PlayerTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTournaments to fetch.
     */
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTournaments.
     */
    cursor?: PlayerTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTournaments.
     */
    distinct?: PlayerTournamentScalarFieldEnum | PlayerTournamentScalarFieldEnum[]
  }

  /**
   * PlayerTournament findFirstOrThrow
   */
  export type PlayerTournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTournament to fetch.
     */
    where?: PlayerTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTournaments to fetch.
     */
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTournaments.
     */
    cursor?: PlayerTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTournaments.
     */
    distinct?: PlayerTournamentScalarFieldEnum | PlayerTournamentScalarFieldEnum[]
  }

  /**
   * PlayerTournament findMany
   */
  export type PlayerTournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTournaments to fetch.
     */
    where?: PlayerTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTournaments to fetch.
     */
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTournaments.
     */
    cursor?: PlayerTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTournaments.
     */
    skip?: number
    distinct?: PlayerTournamentScalarFieldEnum | PlayerTournamentScalarFieldEnum[]
  }

  /**
   * PlayerTournament create
   */
  export type PlayerTournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerTournament.
     */
    data: XOR<PlayerTournamentCreateInput, PlayerTournamentUncheckedCreateInput>
  }

  /**
   * PlayerTournament createMany
   */
  export type PlayerTournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTournaments.
     */
    data: PlayerTournamentCreateManyInput | PlayerTournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTournament createManyAndReturn
   */
  export type PlayerTournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerTournaments.
     */
    data: PlayerTournamentCreateManyInput | PlayerTournamentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTournament update
   */
  export type PlayerTournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerTournament.
     */
    data: XOR<PlayerTournamentUpdateInput, PlayerTournamentUncheckedUpdateInput>
    /**
     * Choose, which PlayerTournament to update.
     */
    where: PlayerTournamentWhereUniqueInput
  }

  /**
   * PlayerTournament updateMany
   */
  export type PlayerTournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTournaments.
     */
    data: XOR<PlayerTournamentUpdateManyMutationInput, PlayerTournamentUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTournaments to update
     */
    where?: PlayerTournamentWhereInput
    /**
     * Limit how many PlayerTournaments to update.
     */
    limit?: number
  }

  /**
   * PlayerTournament updateManyAndReturn
   */
  export type PlayerTournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * The data used to update PlayerTournaments.
     */
    data: XOR<PlayerTournamentUpdateManyMutationInput, PlayerTournamentUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTournaments to update
     */
    where?: PlayerTournamentWhereInput
    /**
     * Limit how many PlayerTournaments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTournament upsert
   */
  export type PlayerTournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerTournament to update in case it exists.
     */
    where: PlayerTournamentWhereUniqueInput
    /**
     * In case the PlayerTournament found by the `where` argument doesn't exist, create a new PlayerTournament with this data.
     */
    create: XOR<PlayerTournamentCreateInput, PlayerTournamentUncheckedCreateInput>
    /**
     * In case the PlayerTournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTournamentUpdateInput, PlayerTournamentUncheckedUpdateInput>
  }

  /**
   * PlayerTournament delete
   */
  export type PlayerTournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    /**
     * Filter which PlayerTournament to delete.
     */
    where: PlayerTournamentWhereUniqueInput
  }

  /**
   * PlayerTournament deleteMany
   */
  export type PlayerTournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTournaments to delete
     */
    where?: PlayerTournamentWhereInput
    /**
     * Limit how many PlayerTournaments to delete.
     */
    limit?: number
  }

  /**
   * PlayerTournament without action
   */
  export type PlayerTournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    id: number | null
  }

  export type TournamentSumAggregateOutputType = {
    id: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: number | null
    name: string | null
    tournamentStat: $Enums.TournamentStat | null
    isFirstRoundsValid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tournamentStat: $Enums.TournamentStat | null
    isFirstRoundsValid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    tournamentStat: number
    isFirstRoundsValid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    id?: true
  }

  export type TournamentSumAggregateInputType = {
    id?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    tournamentStat?: true
    isFirstRoundsValid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    tournamentStat?: true
    isFirstRoundsValid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    tournamentStat?: true
    isFirstRoundsValid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: number
    name: string
    tournamentStat: $Enums.TournamentStat
    isFirstRoundsValid: boolean
    createdAt: Date
    updatedAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tournamentStat?: boolean
    isFirstRoundsValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TournamentWinner?: boolean | Tournament$TournamentWinnerArgs<ExtArgs>
    TournamentElimination?: boolean | Tournament$TournamentEliminationArgs<ExtArgs>
    TournamentGroup?: boolean | Tournament$TournamentGroupArgs<ExtArgs>
    PlayerTournament?: boolean | Tournament$PlayerTournamentArgs<ExtArgs>
    Match?: boolean | Tournament$MatchArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tournamentStat?: boolean
    isFirstRoundsValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tournamentStat?: boolean
    isFirstRoundsValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    tournamentStat?: boolean
    isFirstRoundsValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tournamentStat" | "isFirstRoundsValid" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TournamentWinner?: boolean | Tournament$TournamentWinnerArgs<ExtArgs>
    TournamentElimination?: boolean | Tournament$TournamentEliminationArgs<ExtArgs>
    TournamentGroup?: boolean | Tournament$TournamentGroupArgs<ExtArgs>
    PlayerTournament?: boolean | Tournament$PlayerTournamentArgs<ExtArgs>
    Match?: boolean | Tournament$MatchArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      TournamentWinner: Prisma.$TournamentWinnerPayload<ExtArgs>[]
      TournamentElimination: Prisma.$TournamentEliminationPayload<ExtArgs>[]
      TournamentGroup: Prisma.$TournamentGroupPayload<ExtArgs>[]
      PlayerTournament: Prisma.$PlayerTournamentPayload<ExtArgs>[]
      Match: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tournamentStat: $Enums.TournamentStat
      isFirstRoundsValid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TournamentWinner<T extends Tournament$TournamentWinnerArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$TournamentWinnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TournamentElimination<T extends Tournament$TournamentEliminationArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$TournamentEliminationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TournamentGroup<T extends Tournament$TournamentGroupArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$TournamentGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PlayerTournament<T extends Tournament$PlayerTournamentArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$PlayerTournamentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Match<T extends Tournament$MatchArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$MatchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'Int'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly tournamentStat: FieldRef<"Tournament", 'TournamentStat'>
    readonly isFirstRoundsValid: FieldRef<"Tournament", 'Boolean'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
    readonly updatedAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.TournamentWinner
   */
  export type Tournament$TournamentWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    where?: TournamentWinnerWhereInput
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    cursor?: TournamentWinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentWinnerScalarFieldEnum | TournamentWinnerScalarFieldEnum[]
  }

  /**
   * Tournament.TournamentElimination
   */
  export type Tournament$TournamentEliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    where?: TournamentEliminationWhereInput
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    cursor?: TournamentEliminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * Tournament.TournamentGroup
   */
  export type Tournament$TournamentGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    where?: TournamentGroupWhereInput
    orderBy?: TournamentGroupOrderByWithRelationInput | TournamentGroupOrderByWithRelationInput[]
    cursor?: TournamentGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentGroupScalarFieldEnum | TournamentGroupScalarFieldEnum[]
  }

  /**
   * Tournament.PlayerTournament
   */
  export type Tournament$PlayerTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTournament
     */
    select?: PlayerTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTournament
     */
    omit?: PlayerTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTournamentInclude<ExtArgs> | null
    where?: PlayerTournamentWhereInput
    orderBy?: PlayerTournamentOrderByWithRelationInput | PlayerTournamentOrderByWithRelationInput[]
    cursor?: PlayerTournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTournamentScalarFieldEnum | PlayerTournamentScalarFieldEnum[]
  }

  /**
   * Tournament.Match
   */
  export type Tournament$MatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model TournamentElimination
   */

  export type AggregateTournamentElimination = {
    _count: TournamentEliminationCountAggregateOutputType | null
    _avg: TournamentEliminationAvgAggregateOutputType | null
    _sum: TournamentEliminationSumAggregateOutputType | null
    _min: TournamentEliminationMinAggregateOutputType | null
    _max: TournamentEliminationMaxAggregateOutputType | null
  }

  export type TournamentEliminationAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    currentRound: number | null
    bronzeMatchId: number | null
    winnersBracketByePlayerId: number | null
    losersBracketByePlayerId: number | null
  }

  export type TournamentEliminationSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    currentRound: number | null
    bronzeMatchId: number | null
    winnersBracketByePlayerId: number | null
    losersBracketByePlayerId: number | null
  }

  export type TournamentEliminationMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    currentRound: number | null
    eliminationType: $Enums.EliminationType | null
    bronzeMatchId: number | null
    isLosersBracketPlayerWins: boolean | null
    isEliminationsOver: boolean | null
    winnersBracketByePlayerId: number | null
    losersBracketByePlayerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentEliminationMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    currentRound: number | null
    eliminationType: $Enums.EliminationType | null
    bronzeMatchId: number | null
    isLosersBracketPlayerWins: boolean | null
    isEliminationsOver: boolean | null
    winnersBracketByePlayerId: number | null
    losersBracketByePlayerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentEliminationCountAggregateOutputType = {
    id: number
    tournamentId: number
    currentRound: number
    eliminationType: number
    bronzeMatchId: number
    isLosersBracketPlayerWins: number
    isEliminationsOver: number
    winnersBracketByePlayerId: number
    losersBracketByePlayerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentEliminationAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    currentRound?: true
    bronzeMatchId?: true
    winnersBracketByePlayerId?: true
    losersBracketByePlayerId?: true
  }

  export type TournamentEliminationSumAggregateInputType = {
    id?: true
    tournamentId?: true
    currentRound?: true
    bronzeMatchId?: true
    winnersBracketByePlayerId?: true
    losersBracketByePlayerId?: true
  }

  export type TournamentEliminationMinAggregateInputType = {
    id?: true
    tournamentId?: true
    currentRound?: true
    eliminationType?: true
    bronzeMatchId?: true
    isLosersBracketPlayerWins?: true
    isEliminationsOver?: true
    winnersBracketByePlayerId?: true
    losersBracketByePlayerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentEliminationMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    currentRound?: true
    eliminationType?: true
    bronzeMatchId?: true
    isLosersBracketPlayerWins?: true
    isEliminationsOver?: true
    winnersBracketByePlayerId?: true
    losersBracketByePlayerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentEliminationCountAggregateInputType = {
    id?: true
    tournamentId?: true
    currentRound?: true
    eliminationType?: true
    bronzeMatchId?: true
    isLosersBracketPlayerWins?: true
    isEliminationsOver?: true
    winnersBracketByePlayerId?: true
    losersBracketByePlayerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentEliminationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentElimination to aggregate.
     */
    where?: TournamentEliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEliminations to fetch.
     */
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentEliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentEliminations
    **/
    _count?: true | TournamentEliminationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentEliminationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentEliminationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentEliminationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentEliminationMaxAggregateInputType
  }

  export type GetTournamentEliminationAggregateType<T extends TournamentEliminationAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentElimination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentElimination[P]>
      : GetScalarType<T[P], AggregateTournamentElimination[P]>
  }




  export type TournamentEliminationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEliminationWhereInput
    orderBy?: TournamentEliminationOrderByWithAggregationInput | TournamentEliminationOrderByWithAggregationInput[]
    by: TournamentEliminationScalarFieldEnum[] | TournamentEliminationScalarFieldEnum
    having?: TournamentEliminationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentEliminationCountAggregateInputType | true
    _avg?: TournamentEliminationAvgAggregateInputType
    _sum?: TournamentEliminationSumAggregateInputType
    _min?: TournamentEliminationMinAggregateInputType
    _max?: TournamentEliminationMaxAggregateInputType
  }

  export type TournamentEliminationGroupByOutputType = {
    id: number
    tournamentId: number
    currentRound: number
    eliminationType: $Enums.EliminationType
    bronzeMatchId: number | null
    isLosersBracketPlayerWins: boolean
    isEliminationsOver: boolean
    winnersBracketByePlayerId: number | null
    losersBracketByePlayerId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TournamentEliminationCountAggregateOutputType | null
    _avg: TournamentEliminationAvgAggregateOutputType | null
    _sum: TournamentEliminationSumAggregateOutputType | null
    _min: TournamentEliminationMinAggregateOutputType | null
    _max: TournamentEliminationMaxAggregateOutputType | null
  }

  type GetTournamentEliminationGroupByPayload<T extends TournamentEliminationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentEliminationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentEliminationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentEliminationGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentEliminationGroupByOutputType[P]>
        }
      >
    >


  export type TournamentEliminationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    currentRound?: boolean
    eliminationType?: boolean
    bronzeMatchId?: boolean
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: boolean
    losersBracketByePlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentElimination"]>

  export type TournamentEliminationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    currentRound?: boolean
    eliminationType?: boolean
    bronzeMatchId?: boolean
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: boolean
    losersBracketByePlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentElimination"]>

  export type TournamentEliminationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    currentRound?: boolean
    eliminationType?: boolean
    bronzeMatchId?: boolean
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: boolean
    losersBracketByePlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentElimination"]>

  export type TournamentEliminationSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    currentRound?: boolean
    eliminationType?: boolean
    bronzeMatchId?: boolean
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: boolean
    losersBracketByePlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentEliminationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "currentRound" | "eliminationType" | "bronzeMatchId" | "isLosersBracketPlayerWins" | "isEliminationsOver" | "winnersBracketByePlayerId" | "losersBracketByePlayerId" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentElimination"]>
  export type TournamentEliminationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }
  export type TournamentEliminationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }
  export type TournamentEliminationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    BronzeMatch?: boolean | TournamentElimination$BronzeMatchArgs<ExtArgs>
    WinnersBracketByePlayer?: boolean | TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>
    LosersBracketByePlayer?: boolean | TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>
  }

  export type $TournamentEliminationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentElimination"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs>
      BronzeMatch: Prisma.$MatchPayload<ExtArgs> | null
      WinnersBracketByePlayer: Prisma.$PlayerPayload<ExtArgs> | null
      LosersBracketByePlayer: Prisma.$PlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      currentRound: number
      eliminationType: $Enums.EliminationType
      bronzeMatchId: number | null
      isLosersBracketPlayerWins: boolean
      isEliminationsOver: boolean
      winnersBracketByePlayerId: number | null
      losersBracketByePlayerId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournamentElimination"]>
    composites: {}
  }

  type TournamentEliminationGetPayload<S extends boolean | null | undefined | TournamentEliminationDefaultArgs> = $Result.GetResult<Prisma.$TournamentEliminationPayload, S>

  type TournamentEliminationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentEliminationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentEliminationCountAggregateInputType | true
    }

  export interface TournamentEliminationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentElimination'], meta: { name: 'TournamentElimination' } }
    /**
     * Find zero or one TournamentElimination that matches the filter.
     * @param {TournamentEliminationFindUniqueArgs} args - Arguments to find a TournamentElimination
     * @example
     * // Get one TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentEliminationFindUniqueArgs>(args: SelectSubset<T, TournamentEliminationFindUniqueArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentElimination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentEliminationFindUniqueOrThrowArgs} args - Arguments to find a TournamentElimination
     * @example
     * // Get one TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentEliminationFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentEliminationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentElimination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationFindFirstArgs} args - Arguments to find a TournamentElimination
     * @example
     * // Get one TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentEliminationFindFirstArgs>(args?: SelectSubset<T, TournamentEliminationFindFirstArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentElimination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationFindFirstOrThrowArgs} args - Arguments to find a TournamentElimination
     * @example
     * // Get one TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentEliminationFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentEliminationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentEliminations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentEliminations
     * const tournamentEliminations = await prisma.tournamentElimination.findMany()
     * 
     * // Get first 10 TournamentEliminations
     * const tournamentEliminations = await prisma.tournamentElimination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentEliminationWithIdOnly = await prisma.tournamentElimination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentEliminationFindManyArgs>(args?: SelectSubset<T, TournamentEliminationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentElimination.
     * @param {TournamentEliminationCreateArgs} args - Arguments to create a TournamentElimination.
     * @example
     * // Create one TournamentElimination
     * const TournamentElimination = await prisma.tournamentElimination.create({
     *   data: {
     *     // ... data to create a TournamentElimination
     *   }
     * })
     * 
     */
    create<T extends TournamentEliminationCreateArgs>(args: SelectSubset<T, TournamentEliminationCreateArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentEliminations.
     * @param {TournamentEliminationCreateManyArgs} args - Arguments to create many TournamentEliminations.
     * @example
     * // Create many TournamentEliminations
     * const tournamentElimination = await prisma.tournamentElimination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentEliminationCreateManyArgs>(args?: SelectSubset<T, TournamentEliminationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentEliminations and returns the data saved in the database.
     * @param {TournamentEliminationCreateManyAndReturnArgs} args - Arguments to create many TournamentEliminations.
     * @example
     * // Create many TournamentEliminations
     * const tournamentElimination = await prisma.tournamentElimination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentEliminations and only return the `id`
     * const tournamentEliminationWithIdOnly = await prisma.tournamentElimination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentEliminationCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentEliminationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentElimination.
     * @param {TournamentEliminationDeleteArgs} args - Arguments to delete one TournamentElimination.
     * @example
     * // Delete one TournamentElimination
     * const TournamentElimination = await prisma.tournamentElimination.delete({
     *   where: {
     *     // ... filter to delete one TournamentElimination
     *   }
     * })
     * 
     */
    delete<T extends TournamentEliminationDeleteArgs>(args: SelectSubset<T, TournamentEliminationDeleteArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentElimination.
     * @param {TournamentEliminationUpdateArgs} args - Arguments to update one TournamentElimination.
     * @example
     * // Update one TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentEliminationUpdateArgs>(args: SelectSubset<T, TournamentEliminationUpdateArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentEliminations.
     * @param {TournamentEliminationDeleteManyArgs} args - Arguments to filter TournamentEliminations to delete.
     * @example
     * // Delete a few TournamentEliminations
     * const { count } = await prisma.tournamentElimination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentEliminationDeleteManyArgs>(args?: SelectSubset<T, TournamentEliminationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentEliminations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentEliminations
     * const tournamentElimination = await prisma.tournamentElimination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentEliminationUpdateManyArgs>(args: SelectSubset<T, TournamentEliminationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentEliminations and returns the data updated in the database.
     * @param {TournamentEliminationUpdateManyAndReturnArgs} args - Arguments to update many TournamentEliminations.
     * @example
     * // Update many TournamentEliminations
     * const tournamentElimination = await prisma.tournamentElimination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentEliminations and only return the `id`
     * const tournamentEliminationWithIdOnly = await prisma.tournamentElimination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentEliminationUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentEliminationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentElimination.
     * @param {TournamentEliminationUpsertArgs} args - Arguments to update or create a TournamentElimination.
     * @example
     * // Update or create a TournamentElimination
     * const tournamentElimination = await prisma.tournamentElimination.upsert({
     *   create: {
     *     // ... data to create a TournamentElimination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentElimination we want to update
     *   }
     * })
     */
    upsert<T extends TournamentEliminationUpsertArgs>(args: SelectSubset<T, TournamentEliminationUpsertArgs<ExtArgs>>): Prisma__TournamentEliminationClient<$Result.GetResult<Prisma.$TournamentEliminationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentEliminations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationCountArgs} args - Arguments to filter TournamentEliminations to count.
     * @example
     * // Count the number of TournamentEliminations
     * const count = await prisma.tournamentElimination.count({
     *   where: {
     *     // ... the filter for the TournamentEliminations we want to count
     *   }
     * })
    **/
    count<T extends TournamentEliminationCountArgs>(
      args?: Subset<T, TournamentEliminationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentEliminationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentElimination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentEliminationAggregateArgs>(args: Subset<T, TournamentEliminationAggregateArgs>): Prisma.PrismaPromise<GetTournamentEliminationAggregateType<T>>

    /**
     * Group by TournamentElimination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEliminationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentEliminationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentEliminationGroupByArgs['orderBy'] }
        : { orderBy?: TournamentEliminationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentEliminationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentEliminationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentElimination model
   */
  readonly fields: TournamentEliminationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentElimination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentEliminationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    BronzeMatch<T extends TournamentElimination$BronzeMatchArgs<ExtArgs> = {}>(args?: Subset<T, TournamentElimination$BronzeMatchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    WinnersBracketByePlayer<T extends TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs> = {}>(args?: Subset<T, TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    LosersBracketByePlayer<T extends TournamentElimination$LosersBracketByePlayerArgs<ExtArgs> = {}>(args?: Subset<T, TournamentElimination$LosersBracketByePlayerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentElimination model
   */
  interface TournamentEliminationFieldRefs {
    readonly id: FieldRef<"TournamentElimination", 'Int'>
    readonly tournamentId: FieldRef<"TournamentElimination", 'Int'>
    readonly currentRound: FieldRef<"TournamentElimination", 'Int'>
    readonly eliminationType: FieldRef<"TournamentElimination", 'EliminationType'>
    readonly bronzeMatchId: FieldRef<"TournamentElimination", 'Int'>
    readonly isLosersBracketPlayerWins: FieldRef<"TournamentElimination", 'Boolean'>
    readonly isEliminationsOver: FieldRef<"TournamentElimination", 'Boolean'>
    readonly winnersBracketByePlayerId: FieldRef<"TournamentElimination", 'Int'>
    readonly losersBracketByePlayerId: FieldRef<"TournamentElimination", 'Int'>
    readonly createdAt: FieldRef<"TournamentElimination", 'DateTime'>
    readonly updatedAt: FieldRef<"TournamentElimination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentElimination findUnique
   */
  export type TournamentEliminationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentElimination to fetch.
     */
    where: TournamentEliminationWhereUniqueInput
  }

  /**
   * TournamentElimination findUniqueOrThrow
   */
  export type TournamentEliminationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentElimination to fetch.
     */
    where: TournamentEliminationWhereUniqueInput
  }

  /**
   * TournamentElimination findFirst
   */
  export type TournamentEliminationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentElimination to fetch.
     */
    where?: TournamentEliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEliminations to fetch.
     */
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentEliminations.
     */
    cursor?: TournamentEliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentEliminations.
     */
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * TournamentElimination findFirstOrThrow
   */
  export type TournamentEliminationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentElimination to fetch.
     */
    where?: TournamentEliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEliminations to fetch.
     */
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentEliminations.
     */
    cursor?: TournamentEliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentEliminations.
     */
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * TournamentElimination findMany
   */
  export type TournamentEliminationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEliminations to fetch.
     */
    where?: TournamentEliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEliminations to fetch.
     */
    orderBy?: TournamentEliminationOrderByWithRelationInput | TournamentEliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentEliminations.
     */
    cursor?: TournamentEliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEliminations.
     */
    skip?: number
    distinct?: TournamentEliminationScalarFieldEnum | TournamentEliminationScalarFieldEnum[]
  }

  /**
   * TournamentElimination create
   */
  export type TournamentEliminationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentElimination.
     */
    data: XOR<TournamentEliminationCreateInput, TournamentEliminationUncheckedCreateInput>
  }

  /**
   * TournamentElimination createMany
   */
  export type TournamentEliminationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentEliminations.
     */
    data: TournamentEliminationCreateManyInput | TournamentEliminationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentElimination createManyAndReturn
   */
  export type TournamentEliminationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentEliminations.
     */
    data: TournamentEliminationCreateManyInput | TournamentEliminationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentElimination update
   */
  export type TournamentEliminationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentElimination.
     */
    data: XOR<TournamentEliminationUpdateInput, TournamentEliminationUncheckedUpdateInput>
    /**
     * Choose, which TournamentElimination to update.
     */
    where: TournamentEliminationWhereUniqueInput
  }

  /**
   * TournamentElimination updateMany
   */
  export type TournamentEliminationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentEliminations.
     */
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyInput>
    /**
     * Filter which TournamentEliminations to update
     */
    where?: TournamentEliminationWhereInput
    /**
     * Limit how many TournamentEliminations to update.
     */
    limit?: number
  }

  /**
   * TournamentElimination updateManyAndReturn
   */
  export type TournamentEliminationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * The data used to update TournamentEliminations.
     */
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyInput>
    /**
     * Filter which TournamentEliminations to update
     */
    where?: TournamentEliminationWhereInput
    /**
     * Limit how many TournamentEliminations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentElimination upsert
   */
  export type TournamentEliminationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentElimination to update in case it exists.
     */
    where: TournamentEliminationWhereUniqueInput
    /**
     * In case the TournamentElimination found by the `where` argument doesn't exist, create a new TournamentElimination with this data.
     */
    create: XOR<TournamentEliminationCreateInput, TournamentEliminationUncheckedCreateInput>
    /**
     * In case the TournamentElimination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentEliminationUpdateInput, TournamentEliminationUncheckedUpdateInput>
  }

  /**
   * TournamentElimination delete
   */
  export type TournamentEliminationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
    /**
     * Filter which TournamentElimination to delete.
     */
    where: TournamentEliminationWhereUniqueInput
  }

  /**
   * TournamentElimination deleteMany
   */
  export type TournamentEliminationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentEliminations to delete
     */
    where?: TournamentEliminationWhereInput
    /**
     * Limit how many TournamentEliminations to delete.
     */
    limit?: number
  }

  /**
   * TournamentElimination.BronzeMatch
   */
  export type TournamentElimination$BronzeMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * TournamentElimination.WinnersBracketByePlayer
   */
  export type TournamentElimination$WinnersBracketByePlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * TournamentElimination.LosersBracketByePlayer
   */
  export type TournamentElimination$LosersBracketByePlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * TournamentElimination without action
   */
  export type TournamentEliminationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentElimination
     */
    select?: TournamentEliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentElimination
     */
    omit?: TournamentEliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEliminationInclude<ExtArgs> | null
  }


  /**
   * Model TournamentGroup
   */

  export type AggregateTournamentGroup = {
    _count: TournamentGroupCountAggregateOutputType | null
    _avg: TournamentGroupAvgAggregateOutputType | null
    _sum: TournamentGroupSumAggregateOutputType | null
    _min: TournamentGroupMinAggregateOutputType | null
    _max: TournamentGroupMaxAggregateOutputType | null
  }

  export type TournamentGroupAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    groupNumber: number | null
  }

  export type TournamentGroupSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    groupNumber: number | null
  }

  export type TournamentGroupMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    groupNumber: number | null
    isGroupMatchesEnded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentGroupMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    groupNumber: number | null
    isGroupMatchesEnded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentGroupCountAggregateOutputType = {
    id: number
    tournamentId: number
    groupNumber: number
    isGroupMatchesEnded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentGroupAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    groupNumber?: true
  }

  export type TournamentGroupSumAggregateInputType = {
    id?: true
    tournamentId?: true
    groupNumber?: true
  }

  export type TournamentGroupMinAggregateInputType = {
    id?: true
    tournamentId?: true
    groupNumber?: true
    isGroupMatchesEnded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentGroupMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    groupNumber?: true
    isGroupMatchesEnded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentGroupCountAggregateInputType = {
    id?: true
    tournamentId?: true
    groupNumber?: true
    isGroupMatchesEnded?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentGroup to aggregate.
     */
    where?: TournamentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentGroups to fetch.
     */
    orderBy?: TournamentGroupOrderByWithRelationInput | TournamentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentGroups
    **/
    _count?: true | TournamentGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentGroupMaxAggregateInputType
  }

  export type GetTournamentGroupAggregateType<T extends TournamentGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentGroup[P]>
      : GetScalarType<T[P], AggregateTournamentGroup[P]>
  }




  export type TournamentGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentGroupWhereInput
    orderBy?: TournamentGroupOrderByWithAggregationInput | TournamentGroupOrderByWithAggregationInput[]
    by: TournamentGroupScalarFieldEnum[] | TournamentGroupScalarFieldEnum
    having?: TournamentGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentGroupCountAggregateInputType | true
    _avg?: TournamentGroupAvgAggregateInputType
    _sum?: TournamentGroupSumAggregateInputType
    _min?: TournamentGroupMinAggregateInputType
    _max?: TournamentGroupMaxAggregateInputType
  }

  export type TournamentGroupGroupByOutputType = {
    id: number
    tournamentId: number
    groupNumber: number
    isGroupMatchesEnded: boolean
    createdAt: Date
    updatedAt: Date
    _count: TournamentGroupCountAggregateOutputType | null
    _avg: TournamentGroupAvgAggregateOutputType | null
    _sum: TournamentGroupSumAggregateOutputType | null
    _min: TournamentGroupMinAggregateOutputType | null
    _max: TournamentGroupMaxAggregateOutputType | null
  }

  type GetTournamentGroupGroupByPayload<T extends TournamentGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupGroupByOutputType[P]>
        }
      >
    >


  export type TournamentGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "groupNumber" | "isGroupMatchesEnded" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentGroup"]>
  export type TournamentGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type TournamentGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type TournamentGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $TournamentGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentGroup"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      groupNumber: number
      isGroupMatchesEnded: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournamentGroup"]>
    composites: {}
  }

  type TournamentGroupGetPayload<S extends boolean | null | undefined | TournamentGroupDefaultArgs> = $Result.GetResult<Prisma.$TournamentGroupPayload, S>

  type TournamentGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentGroupCountAggregateInputType | true
    }

  export interface TournamentGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentGroup'], meta: { name: 'TournamentGroup' } }
    /**
     * Find zero or one TournamentGroup that matches the filter.
     * @param {TournamentGroupFindUniqueArgs} args - Arguments to find a TournamentGroup
     * @example
     * // Get one TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentGroupFindUniqueArgs>(args: SelectSubset<T, TournamentGroupFindUniqueArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentGroupFindUniqueOrThrowArgs} args - Arguments to find a TournamentGroup
     * @example
     * // Get one TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupFindFirstArgs} args - Arguments to find a TournamentGroup
     * @example
     * // Get one TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentGroupFindFirstArgs>(args?: SelectSubset<T, TournamentGroupFindFirstArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupFindFirstOrThrowArgs} args - Arguments to find a TournamentGroup
     * @example
     * // Get one TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentGroups
     * const tournamentGroups = await prisma.tournamentGroup.findMany()
     * 
     * // Get first 10 TournamentGroups
     * const tournamentGroups = await prisma.tournamentGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentGroupWithIdOnly = await prisma.tournamentGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentGroupFindManyArgs>(args?: SelectSubset<T, TournamentGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentGroup.
     * @param {TournamentGroupCreateArgs} args - Arguments to create a TournamentGroup.
     * @example
     * // Create one TournamentGroup
     * const TournamentGroup = await prisma.tournamentGroup.create({
     *   data: {
     *     // ... data to create a TournamentGroup
     *   }
     * })
     * 
     */
    create<T extends TournamentGroupCreateArgs>(args: SelectSubset<T, TournamentGroupCreateArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentGroups.
     * @param {TournamentGroupCreateManyArgs} args - Arguments to create many TournamentGroups.
     * @example
     * // Create many TournamentGroups
     * const tournamentGroup = await prisma.tournamentGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentGroupCreateManyArgs>(args?: SelectSubset<T, TournamentGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentGroups and returns the data saved in the database.
     * @param {TournamentGroupCreateManyAndReturnArgs} args - Arguments to create many TournamentGroups.
     * @example
     * // Create many TournamentGroups
     * const tournamentGroup = await prisma.tournamentGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentGroups and only return the `id`
     * const tournamentGroupWithIdOnly = await prisma.tournamentGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentGroup.
     * @param {TournamentGroupDeleteArgs} args - Arguments to delete one TournamentGroup.
     * @example
     * // Delete one TournamentGroup
     * const TournamentGroup = await prisma.tournamentGroup.delete({
     *   where: {
     *     // ... filter to delete one TournamentGroup
     *   }
     * })
     * 
     */
    delete<T extends TournamentGroupDeleteArgs>(args: SelectSubset<T, TournamentGroupDeleteArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentGroup.
     * @param {TournamentGroupUpdateArgs} args - Arguments to update one TournamentGroup.
     * @example
     * // Update one TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentGroupUpdateArgs>(args: SelectSubset<T, TournamentGroupUpdateArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentGroups.
     * @param {TournamentGroupDeleteManyArgs} args - Arguments to filter TournamentGroups to delete.
     * @example
     * // Delete a few TournamentGroups
     * const { count } = await prisma.tournamentGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentGroupDeleteManyArgs>(args?: SelectSubset<T, TournamentGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentGroups
     * const tournamentGroup = await prisma.tournamentGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentGroupUpdateManyArgs>(args: SelectSubset<T, TournamentGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentGroups and returns the data updated in the database.
     * @param {TournamentGroupUpdateManyAndReturnArgs} args - Arguments to update many TournamentGroups.
     * @example
     * // Update many TournamentGroups
     * const tournamentGroup = await prisma.tournamentGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentGroups and only return the `id`
     * const tournamentGroupWithIdOnly = await prisma.tournamentGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentGroup.
     * @param {TournamentGroupUpsertArgs} args - Arguments to update or create a TournamentGroup.
     * @example
     * // Update or create a TournamentGroup
     * const tournamentGroup = await prisma.tournamentGroup.upsert({
     *   create: {
     *     // ... data to create a TournamentGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentGroup we want to update
     *   }
     * })
     */
    upsert<T extends TournamentGroupUpsertArgs>(args: SelectSubset<T, TournamentGroupUpsertArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupCountArgs} args - Arguments to filter TournamentGroups to count.
     * @example
     * // Count the number of TournamentGroups
     * const count = await prisma.tournamentGroup.count({
     *   where: {
     *     // ... the filter for the TournamentGroups we want to count
     *   }
     * })
    **/
    count<T extends TournamentGroupCountArgs>(
      args?: Subset<T, TournamentGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentGroupAggregateArgs>(args: Subset<T, TournamentGroupAggregateArgs>): Prisma.PrismaPromise<GetTournamentGroupAggregateType<T>>

    /**
     * Group by TournamentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentGroup model
   */
  readonly fields: TournamentGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentGroup model
   */
  interface TournamentGroupFieldRefs {
    readonly id: FieldRef<"TournamentGroup", 'Int'>
    readonly tournamentId: FieldRef<"TournamentGroup", 'Int'>
    readonly groupNumber: FieldRef<"TournamentGroup", 'Int'>
    readonly isGroupMatchesEnded: FieldRef<"TournamentGroup", 'Boolean'>
    readonly createdAt: FieldRef<"TournamentGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"TournamentGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentGroup findUnique
   */
  export type TournamentGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter, which TournamentGroup to fetch.
     */
    where: TournamentGroupWhereUniqueInput
  }

  /**
   * TournamentGroup findUniqueOrThrow
   */
  export type TournamentGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter, which TournamentGroup to fetch.
     */
    where: TournamentGroupWhereUniqueInput
  }

  /**
   * TournamentGroup findFirst
   */
  export type TournamentGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter, which TournamentGroup to fetch.
     */
    where?: TournamentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentGroups to fetch.
     */
    orderBy?: TournamentGroupOrderByWithRelationInput | TournamentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentGroups.
     */
    cursor?: TournamentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentGroups.
     */
    distinct?: TournamentGroupScalarFieldEnum | TournamentGroupScalarFieldEnum[]
  }

  /**
   * TournamentGroup findFirstOrThrow
   */
  export type TournamentGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter, which TournamentGroup to fetch.
     */
    where?: TournamentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentGroups to fetch.
     */
    orderBy?: TournamentGroupOrderByWithRelationInput | TournamentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentGroups.
     */
    cursor?: TournamentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentGroups.
     */
    distinct?: TournamentGroupScalarFieldEnum | TournamentGroupScalarFieldEnum[]
  }

  /**
   * TournamentGroup findMany
   */
  export type TournamentGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter, which TournamentGroups to fetch.
     */
    where?: TournamentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentGroups to fetch.
     */
    orderBy?: TournamentGroupOrderByWithRelationInput | TournamentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentGroups.
     */
    cursor?: TournamentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentGroups.
     */
    skip?: number
    distinct?: TournamentGroupScalarFieldEnum | TournamentGroupScalarFieldEnum[]
  }

  /**
   * TournamentGroup create
   */
  export type TournamentGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentGroup.
     */
    data: XOR<TournamentGroupCreateInput, TournamentGroupUncheckedCreateInput>
  }

  /**
   * TournamentGroup createMany
   */
  export type TournamentGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentGroups.
     */
    data: TournamentGroupCreateManyInput | TournamentGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentGroup createManyAndReturn
   */
  export type TournamentGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentGroups.
     */
    data: TournamentGroupCreateManyInput | TournamentGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentGroup update
   */
  export type TournamentGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentGroup.
     */
    data: XOR<TournamentGroupUpdateInput, TournamentGroupUncheckedUpdateInput>
    /**
     * Choose, which TournamentGroup to update.
     */
    where: TournamentGroupWhereUniqueInput
  }

  /**
   * TournamentGroup updateMany
   */
  export type TournamentGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentGroups.
     */
    data: XOR<TournamentGroupUpdateManyMutationInput, TournamentGroupUncheckedUpdateManyInput>
    /**
     * Filter which TournamentGroups to update
     */
    where?: TournamentGroupWhereInput
    /**
     * Limit how many TournamentGroups to update.
     */
    limit?: number
  }

  /**
   * TournamentGroup updateManyAndReturn
   */
  export type TournamentGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * The data used to update TournamentGroups.
     */
    data: XOR<TournamentGroupUpdateManyMutationInput, TournamentGroupUncheckedUpdateManyInput>
    /**
     * Filter which TournamentGroups to update
     */
    where?: TournamentGroupWhereInput
    /**
     * Limit how many TournamentGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentGroup upsert
   */
  export type TournamentGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentGroup to update in case it exists.
     */
    where: TournamentGroupWhereUniqueInput
    /**
     * In case the TournamentGroup found by the `where` argument doesn't exist, create a new TournamentGroup with this data.
     */
    create: XOR<TournamentGroupCreateInput, TournamentGroupUncheckedCreateInput>
    /**
     * In case the TournamentGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentGroupUpdateInput, TournamentGroupUncheckedUpdateInput>
  }

  /**
   * TournamentGroup delete
   */
  export type TournamentGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
    /**
     * Filter which TournamentGroup to delete.
     */
    where: TournamentGroupWhereUniqueInput
  }

  /**
   * TournamentGroup deleteMany
   */
  export type TournamentGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentGroups to delete
     */
    where?: TournamentGroupWhereInput
    /**
     * Limit how many TournamentGroups to delete.
     */
    limit?: number
  }

  /**
   * TournamentGroup without action
   */
  export type TournamentGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroup
     */
    select?: TournamentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentGroup
     */
    omit?: TournamentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentGroupInclude<ExtArgs> | null
  }


  /**
   * Model TournamentWinner
   */

  export type AggregateTournamentWinner = {
    _count: TournamentWinnerCountAggregateOutputType | null
    _avg: TournamentWinnerAvgAggregateOutputType | null
    _sum: TournamentWinnerSumAggregateOutputType | null
    _min: TournamentWinnerMinAggregateOutputType | null
    _max: TournamentWinnerMaxAggregateOutputType | null
  }

  export type TournamentWinnerAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    playerId: number | null
    place: number | null
  }

  export type TournamentWinnerSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    playerId: number | null
    place: number | null
  }

  export type TournamentWinnerMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    playerId: number | null
    place: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentWinnerMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    playerId: number | null
    place: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentWinnerCountAggregateOutputType = {
    id: number
    tournamentId: number
    playerId: number
    place: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentWinnerAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    playerId?: true
    place?: true
  }

  export type TournamentWinnerSumAggregateInputType = {
    id?: true
    tournamentId?: true
    playerId?: true
    place?: true
  }

  export type TournamentWinnerMinAggregateInputType = {
    id?: true
    tournamentId?: true
    playerId?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentWinnerMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    playerId?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentWinnerCountAggregateInputType = {
    id?: true
    tournamentId?: true
    playerId?: true
    place?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentWinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentWinner to aggregate.
     */
    where?: TournamentWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentWinners to fetch.
     */
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentWinners
    **/
    _count?: true | TournamentWinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentWinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentWinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentWinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentWinnerMaxAggregateInputType
  }

  export type GetTournamentWinnerAggregateType<T extends TournamentWinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentWinner[P]>
      : GetScalarType<T[P], AggregateTournamentWinner[P]>
  }




  export type TournamentWinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWinnerWhereInput
    orderBy?: TournamentWinnerOrderByWithAggregationInput | TournamentWinnerOrderByWithAggregationInput[]
    by: TournamentWinnerScalarFieldEnum[] | TournamentWinnerScalarFieldEnum
    having?: TournamentWinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentWinnerCountAggregateInputType | true
    _avg?: TournamentWinnerAvgAggregateInputType
    _sum?: TournamentWinnerSumAggregateInputType
    _min?: TournamentWinnerMinAggregateInputType
    _max?: TournamentWinnerMaxAggregateInputType
  }

  export type TournamentWinnerGroupByOutputType = {
    id: number
    tournamentId: number
    playerId: number
    place: number
    createdAt: Date
    updatedAt: Date
    _count: TournamentWinnerCountAggregateOutputType | null
    _avg: TournamentWinnerAvgAggregateOutputType | null
    _sum: TournamentWinnerSumAggregateOutputType | null
    _min: TournamentWinnerMinAggregateOutputType | null
    _max: TournamentWinnerMaxAggregateOutputType | null
  }

  type GetTournamentWinnerGroupByPayload<T extends TournamentWinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentWinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentWinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentWinnerGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentWinnerGroupByOutputType[P]>
        }
      >
    >


  export type TournamentWinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    playerId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    playerId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    playerId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    playerId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentWinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "playerId" | "place" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentWinner"]>
  export type TournamentWinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type TournamentWinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type TournamentWinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    Player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $TournamentWinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentWinner"
    objects: {
      Tournament: Prisma.$TournamentPayload<ExtArgs>
      Player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      playerId: number
      place: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournamentWinner"]>
    composites: {}
  }

  type TournamentWinnerGetPayload<S extends boolean | null | undefined | TournamentWinnerDefaultArgs> = $Result.GetResult<Prisma.$TournamentWinnerPayload, S>

  type TournamentWinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentWinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentWinnerCountAggregateInputType | true
    }

  export interface TournamentWinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentWinner'], meta: { name: 'TournamentWinner' } }
    /**
     * Find zero or one TournamentWinner that matches the filter.
     * @param {TournamentWinnerFindUniqueArgs} args - Arguments to find a TournamentWinner
     * @example
     * // Get one TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentWinnerFindUniqueArgs>(args: SelectSubset<T, TournamentWinnerFindUniqueArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentWinner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentWinnerFindUniqueOrThrowArgs} args - Arguments to find a TournamentWinner
     * @example
     * // Get one TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentWinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentWinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentWinner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerFindFirstArgs} args - Arguments to find a TournamentWinner
     * @example
     * // Get one TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentWinnerFindFirstArgs>(args?: SelectSubset<T, TournamentWinnerFindFirstArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentWinner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerFindFirstOrThrowArgs} args - Arguments to find a TournamentWinner
     * @example
     * // Get one TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentWinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentWinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentWinners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentWinners
     * const tournamentWinners = await prisma.tournamentWinner.findMany()
     * 
     * // Get first 10 TournamentWinners
     * const tournamentWinners = await prisma.tournamentWinner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWinnerWithIdOnly = await prisma.tournamentWinner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentWinnerFindManyArgs>(args?: SelectSubset<T, TournamentWinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentWinner.
     * @param {TournamentWinnerCreateArgs} args - Arguments to create a TournamentWinner.
     * @example
     * // Create one TournamentWinner
     * const TournamentWinner = await prisma.tournamentWinner.create({
     *   data: {
     *     // ... data to create a TournamentWinner
     *   }
     * })
     * 
     */
    create<T extends TournamentWinnerCreateArgs>(args: SelectSubset<T, TournamentWinnerCreateArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentWinners.
     * @param {TournamentWinnerCreateManyArgs} args - Arguments to create many TournamentWinners.
     * @example
     * // Create many TournamentWinners
     * const tournamentWinner = await prisma.tournamentWinner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentWinnerCreateManyArgs>(args?: SelectSubset<T, TournamentWinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentWinners and returns the data saved in the database.
     * @param {TournamentWinnerCreateManyAndReturnArgs} args - Arguments to create many TournamentWinners.
     * @example
     * // Create many TournamentWinners
     * const tournamentWinner = await prisma.tournamentWinner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentWinners and only return the `id`
     * const tournamentWinnerWithIdOnly = await prisma.tournamentWinner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentWinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentWinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentWinner.
     * @param {TournamentWinnerDeleteArgs} args - Arguments to delete one TournamentWinner.
     * @example
     * // Delete one TournamentWinner
     * const TournamentWinner = await prisma.tournamentWinner.delete({
     *   where: {
     *     // ... filter to delete one TournamentWinner
     *   }
     * })
     * 
     */
    delete<T extends TournamentWinnerDeleteArgs>(args: SelectSubset<T, TournamentWinnerDeleteArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentWinner.
     * @param {TournamentWinnerUpdateArgs} args - Arguments to update one TournamentWinner.
     * @example
     * // Update one TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentWinnerUpdateArgs>(args: SelectSubset<T, TournamentWinnerUpdateArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentWinners.
     * @param {TournamentWinnerDeleteManyArgs} args - Arguments to filter TournamentWinners to delete.
     * @example
     * // Delete a few TournamentWinners
     * const { count } = await prisma.tournamentWinner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentWinnerDeleteManyArgs>(args?: SelectSubset<T, TournamentWinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentWinners
     * const tournamentWinner = await prisma.tournamentWinner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentWinnerUpdateManyArgs>(args: SelectSubset<T, TournamentWinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentWinners and returns the data updated in the database.
     * @param {TournamentWinnerUpdateManyAndReturnArgs} args - Arguments to update many TournamentWinners.
     * @example
     * // Update many TournamentWinners
     * const tournamentWinner = await prisma.tournamentWinner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentWinners and only return the `id`
     * const tournamentWinnerWithIdOnly = await prisma.tournamentWinner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentWinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentWinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentWinner.
     * @param {TournamentWinnerUpsertArgs} args - Arguments to update or create a TournamentWinner.
     * @example
     * // Update or create a TournamentWinner
     * const tournamentWinner = await prisma.tournamentWinner.upsert({
     *   create: {
     *     // ... data to create a TournamentWinner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentWinner we want to update
     *   }
     * })
     */
    upsert<T extends TournamentWinnerUpsertArgs>(args: SelectSubset<T, TournamentWinnerUpsertArgs<ExtArgs>>): Prisma__TournamentWinnerClient<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentWinners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerCountArgs} args - Arguments to filter TournamentWinners to count.
     * @example
     * // Count the number of TournamentWinners
     * const count = await prisma.tournamentWinner.count({
     *   where: {
     *     // ... the filter for the TournamentWinners we want to count
     *   }
     * })
    **/
    count<T extends TournamentWinnerCountArgs>(
      args?: Subset<T, TournamentWinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentWinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentWinnerAggregateArgs>(args: Subset<T, TournamentWinnerAggregateArgs>): Prisma.PrismaPromise<GetTournamentWinnerAggregateType<T>>

    /**
     * Group by TournamentWinner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentWinnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentWinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentWinnerGroupByArgs['orderBy'] }
        : { orderBy?: TournamentWinnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentWinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentWinner model
   */
  readonly fields: TournamentWinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentWinner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentWinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentWinner model
   */
  interface TournamentWinnerFieldRefs {
    readonly id: FieldRef<"TournamentWinner", 'Int'>
    readonly tournamentId: FieldRef<"TournamentWinner", 'Int'>
    readonly playerId: FieldRef<"TournamentWinner", 'Int'>
    readonly place: FieldRef<"TournamentWinner", 'Int'>
    readonly createdAt: FieldRef<"TournamentWinner", 'DateTime'>
    readonly updatedAt: FieldRef<"TournamentWinner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentWinner findUnique
   */
  export type TournamentWinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentWinner to fetch.
     */
    where: TournamentWinnerWhereUniqueInput
  }

  /**
   * TournamentWinner findUniqueOrThrow
   */
  export type TournamentWinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentWinner to fetch.
     */
    where: TournamentWinnerWhereUniqueInput
  }

  /**
   * TournamentWinner findFirst
   */
  export type TournamentWinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentWinner to fetch.
     */
    where?: TournamentWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentWinners to fetch.
     */
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentWinners.
     */
    cursor?: TournamentWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentWinners.
     */
    distinct?: TournamentWinnerScalarFieldEnum | TournamentWinnerScalarFieldEnum[]
  }

  /**
   * TournamentWinner findFirstOrThrow
   */
  export type TournamentWinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentWinner to fetch.
     */
    where?: TournamentWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentWinners to fetch.
     */
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentWinners.
     */
    cursor?: TournamentWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentWinners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentWinners.
     */
    distinct?: TournamentWinnerScalarFieldEnum | TournamentWinnerScalarFieldEnum[]
  }

  /**
   * TournamentWinner findMany
   */
  export type TournamentWinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentWinners to fetch.
     */
    where?: TournamentWinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentWinners to fetch.
     */
    orderBy?: TournamentWinnerOrderByWithRelationInput | TournamentWinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentWinners.
     */
    cursor?: TournamentWinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentWinners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentWinners.
     */
    skip?: number
    distinct?: TournamentWinnerScalarFieldEnum | TournamentWinnerScalarFieldEnum[]
  }

  /**
   * TournamentWinner create
   */
  export type TournamentWinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentWinner.
     */
    data: XOR<TournamentWinnerCreateInput, TournamentWinnerUncheckedCreateInput>
  }

  /**
   * TournamentWinner createMany
   */
  export type TournamentWinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentWinners.
     */
    data: TournamentWinnerCreateManyInput | TournamentWinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentWinner createManyAndReturn
   */
  export type TournamentWinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentWinners.
     */
    data: TournamentWinnerCreateManyInput | TournamentWinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentWinner update
   */
  export type TournamentWinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentWinner.
     */
    data: XOR<TournamentWinnerUpdateInput, TournamentWinnerUncheckedUpdateInput>
    /**
     * Choose, which TournamentWinner to update.
     */
    where: TournamentWinnerWhereUniqueInput
  }

  /**
   * TournamentWinner updateMany
   */
  export type TournamentWinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentWinners.
     */
    data: XOR<TournamentWinnerUpdateManyMutationInput, TournamentWinnerUncheckedUpdateManyInput>
    /**
     * Filter which TournamentWinners to update
     */
    where?: TournamentWinnerWhereInput
    /**
     * Limit how many TournamentWinners to update.
     */
    limit?: number
  }

  /**
   * TournamentWinner updateManyAndReturn
   */
  export type TournamentWinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * The data used to update TournamentWinners.
     */
    data: XOR<TournamentWinnerUpdateManyMutationInput, TournamentWinnerUncheckedUpdateManyInput>
    /**
     * Filter which TournamentWinners to update
     */
    where?: TournamentWinnerWhereInput
    /**
     * Limit how many TournamentWinners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentWinner upsert
   */
  export type TournamentWinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentWinner to update in case it exists.
     */
    where: TournamentWinnerWhereUniqueInput
    /**
     * In case the TournamentWinner found by the `where` argument doesn't exist, create a new TournamentWinner with this data.
     */
    create: XOR<TournamentWinnerCreateInput, TournamentWinnerUncheckedCreateInput>
    /**
     * In case the TournamentWinner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentWinnerUpdateInput, TournamentWinnerUncheckedUpdateInput>
  }

  /**
   * TournamentWinner delete
   */
  export type TournamentWinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
    /**
     * Filter which TournamentWinner to delete.
     */
    where: TournamentWinnerWhereUniqueInput
  }

  /**
   * TournamentWinner deleteMany
   */
  export type TournamentWinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentWinners to delete
     */
    where?: TournamentWinnerWhereInput
    /**
     * Limit how many TournamentWinners to delete.
     */
    limit?: number
  }

  /**
   * TournamentWinner without action
   */
  export type TournamentWinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentWinner
     */
    select?: TournamentWinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentWinner
     */
    omit?: TournamentWinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentWinnerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MatchScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    winnerId: 'winnerId',
    serialNumber: 'serialNumber',
    isOver: 'isOver',
    group: 'group',
    isKnockoutMatch: 'isKnockoutMatch',
    knockoutRound: 'knockoutRound',
    knockoutMatchType: 'knockoutMatchType',
    isDoubleEliminationMatch: 'isDoubleEliminationMatch',
    isWinnersBracketMatch: 'isWinnersBracketMatch',
    nextMatchId: 'nextMatchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    overallWins: 'overallWins',
    overallLosses: 'overallLosses',
    group: 'group',
    elo: 'elo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PlayerTournamentScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    tournamentId: 'tournamentId',
    wins: 'wins',
    losses: 'losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerTournamentScalarFieldEnum = (typeof PlayerTournamentScalarFieldEnum)[keyof typeof PlayerTournamentScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tournamentStat: 'tournamentStat',
    isFirstRoundsValid: 'isFirstRoundsValid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentEliminationScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    currentRound: 'currentRound',
    eliminationType: 'eliminationType',
    bronzeMatchId: 'bronzeMatchId',
    isLosersBracketPlayerWins: 'isLosersBracketPlayerWins',
    isEliminationsOver: 'isEliminationsOver',
    winnersBracketByePlayerId: 'winnersBracketByePlayerId',
    losersBracketByePlayerId: 'losersBracketByePlayerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentEliminationScalarFieldEnum = (typeof TournamentEliminationScalarFieldEnum)[keyof typeof TournamentEliminationScalarFieldEnum]


  export const TournamentGroupScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    groupNumber: 'groupNumber',
    isGroupMatchesEnded: 'isGroupMatchesEnded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentGroupScalarFieldEnum = (typeof TournamentGroupScalarFieldEnum)[keyof typeof TournamentGroupScalarFieldEnum]


  export const TournamentWinnerScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    playerId: 'playerId',
    place: 'place',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentWinnerScalarFieldEnum = (typeof TournamentWinnerScalarFieldEnum)[keyof typeof TournamentWinnerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'KnockoutMatchType'
   */
  export type EnumKnockoutMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnockoutMatchType'>
    


  /**
   * Reference to a field of type 'KnockoutMatchType[]'
   */
  export type ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnockoutMatchType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TournamentStat'
   */
  export type EnumTournamentStatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStat'>
    


  /**
   * Reference to a field of type 'TournamentStat[]'
   */
  export type ListEnumTournamentStatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStat[]'>
    


  /**
   * Reference to a field of type 'EliminationType'
   */
  export type EnumEliminationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EliminationType'>
    


  /**
   * Reference to a field of type 'EliminationType[]'
   */
  export type ListEnumEliminationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EliminationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: IntFilter<"Match"> | number
    tournamentId?: IntFilter<"Match"> | number
    player1Id?: IntNullableFilter<"Match"> | number | null
    player2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    group?: IntNullableFilter<"Match"> | number | null
    isKnockoutMatch?: BoolFilter<"Match"> | boolean
    knockoutRound?: IntNullableFilter<"Match"> | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFilter<"Match"> | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFilter<"Match"> | boolean
    isWinnersBracketMatch?: BoolFilter<"Match"> | boolean
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player1?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    Player2?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    Winner?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    TournamentElimination?: TournamentEliminationListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrderInput | SortOrder
    player2Id?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    isOver?: SortOrder
    group?: SortOrderInput | SortOrder
    isKnockoutMatch?: SortOrder
    knockoutRound?: SortOrderInput | SortOrder
    knockoutMatchType?: SortOrder
    isDoubleEliminationMatch?: SortOrder
    isWinnersBracketMatch?: SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    Player1?: PlayerOrderByWithRelationInput
    Player2?: PlayerOrderByWithRelationInput
    Winner?: PlayerOrderByWithRelationInput
    TournamentElimination?: TournamentEliminationOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    tournamentId?: IntFilter<"Match"> | number
    player1Id?: IntNullableFilter<"Match"> | number | null
    player2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    group?: IntNullableFilter<"Match"> | number | null
    isKnockoutMatch?: BoolFilter<"Match"> | boolean
    knockoutRound?: IntNullableFilter<"Match"> | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFilter<"Match"> | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFilter<"Match"> | boolean
    isWinnersBracketMatch?: BoolFilter<"Match"> | boolean
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player1?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    Player2?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    Winner?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    TournamentElimination?: TournamentEliminationListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrderInput | SortOrder
    player2Id?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    isOver?: SortOrder
    group?: SortOrderInput | SortOrder
    isKnockoutMatch?: SortOrder
    knockoutRound?: SortOrderInput | SortOrder
    knockoutMatchType?: SortOrder
    isDoubleEliminationMatch?: SortOrder
    isWinnersBracketMatch?: SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Match"> | number
    tournamentId?: IntWithAggregatesFilter<"Match"> | number
    player1Id?: IntNullableWithAggregatesFilter<"Match"> | number | null
    player2Id?: IntNullableWithAggregatesFilter<"Match"> | number | null
    winnerId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    serialNumber?: IntNullableWithAggregatesFilter<"Match"> | number | null
    isOver?: BoolWithAggregatesFilter<"Match"> | boolean
    group?: IntNullableWithAggregatesFilter<"Match"> | number | null
    isKnockoutMatch?: BoolWithAggregatesFilter<"Match"> | boolean
    knockoutRound?: IntNullableWithAggregatesFilter<"Match"> | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeWithAggregatesFilter<"Match"> | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolWithAggregatesFilter<"Match"> | boolean
    isWinnersBracketMatch?: BoolWithAggregatesFilter<"Match"> | boolean
    nextMatchId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    overallWins?: IntFilter<"Player"> | number
    overallLosses?: IntFilter<"Player"> | number
    group?: IntNullableFilter<"Player"> | number | null
    elo?: IntFilter<"Player"> | number
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    TournamentWinner?: TournamentWinnerListRelationFilter
    WinnersByeEliminations?: TournamentEliminationListRelationFilter
    LosersByeEliminations?: TournamentEliminationListRelationFilter
    PlayerTournament?: PlayerTournamentListRelationFilter
    MatchPlayer1?: MatchListRelationFilter
    MatchPlayer2?: MatchListRelationFilter
    MatchWinner?: MatchListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrderInput | SortOrder
    elo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TournamentWinner?: TournamentWinnerOrderByRelationAggregateInput
    WinnersByeEliminations?: TournamentEliminationOrderByRelationAggregateInput
    LosersByeEliminations?: TournamentEliminationOrderByRelationAggregateInput
    PlayerTournament?: PlayerTournamentOrderByRelationAggregateInput
    MatchPlayer1?: MatchOrderByRelationAggregateInput
    MatchPlayer2?: MatchOrderByRelationAggregateInput
    MatchWinner?: MatchOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    overallWins?: IntFilter<"Player"> | number
    overallLosses?: IntFilter<"Player"> | number
    group?: IntNullableFilter<"Player"> | number | null
    elo?: IntFilter<"Player"> | number
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    TournamentWinner?: TournamentWinnerListRelationFilter
    WinnersByeEliminations?: TournamentEliminationListRelationFilter
    LosersByeEliminations?: TournamentEliminationListRelationFilter
    PlayerTournament?: PlayerTournamentListRelationFilter
    MatchPlayer1?: MatchListRelationFilter
    MatchPlayer2?: MatchListRelationFilter
    MatchWinner?: MatchListRelationFilter
  }, "id" | "name">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrderInput | SortOrder
    elo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    overallWins?: IntWithAggregatesFilter<"Player"> | number
    overallLosses?: IntWithAggregatesFilter<"Player"> | number
    group?: IntNullableWithAggregatesFilter<"Player"> | number | null
    elo?: IntWithAggregatesFilter<"Player"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type PlayerTournamentWhereInput = {
    AND?: PlayerTournamentWhereInput | PlayerTournamentWhereInput[]
    OR?: PlayerTournamentWhereInput[]
    NOT?: PlayerTournamentWhereInput | PlayerTournamentWhereInput[]
    id?: IntFilter<"PlayerTournament"> | number
    playerId?: IntFilter<"PlayerTournament"> | number
    tournamentId?: IntFilter<"PlayerTournament"> | number
    wins?: IntFilter<"PlayerTournament"> | number
    losses?: IntFilter<"PlayerTournament"> | number
    createdAt?: DateTimeFilter<"PlayerTournament"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerTournament"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type PlayerTournamentOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    Player?: PlayerOrderByWithRelationInput
  }

  export type PlayerTournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerTournamentWhereInput | PlayerTournamentWhereInput[]
    OR?: PlayerTournamentWhereInput[]
    NOT?: PlayerTournamentWhereInput | PlayerTournamentWhereInput[]
    playerId?: IntFilter<"PlayerTournament"> | number
    tournamentId?: IntFilter<"PlayerTournament"> | number
    wins?: IntFilter<"PlayerTournament"> | number
    losses?: IntFilter<"PlayerTournament"> | number
    createdAt?: DateTimeFilter<"PlayerTournament"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerTournament"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type PlayerTournamentOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerTournamentCountOrderByAggregateInput
    _avg?: PlayerTournamentAvgOrderByAggregateInput
    _max?: PlayerTournamentMaxOrderByAggregateInput
    _min?: PlayerTournamentMinOrderByAggregateInput
    _sum?: PlayerTournamentSumOrderByAggregateInput
  }

  export type PlayerTournamentScalarWhereWithAggregatesInput = {
    AND?: PlayerTournamentScalarWhereWithAggregatesInput | PlayerTournamentScalarWhereWithAggregatesInput[]
    OR?: PlayerTournamentScalarWhereWithAggregatesInput[]
    NOT?: PlayerTournamentScalarWhereWithAggregatesInput | PlayerTournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerTournament"> | number
    playerId?: IntWithAggregatesFilter<"PlayerTournament"> | number
    tournamentId?: IntWithAggregatesFilter<"PlayerTournament"> | number
    wins?: IntWithAggregatesFilter<"PlayerTournament"> | number
    losses?: IntWithAggregatesFilter<"PlayerTournament"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlayerTournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerTournament"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: IntFilter<"Tournament"> | number
    name?: StringFilter<"Tournament"> | string
    tournamentStat?: EnumTournamentStatFilter<"Tournament"> | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFilter<"Tournament"> | boolean
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    TournamentWinner?: TournamentWinnerListRelationFilter
    TournamentElimination?: TournamentEliminationListRelationFilter
    TournamentGroup?: TournamentGroupListRelationFilter
    PlayerTournament?: PlayerTournamentListRelationFilter
    Match?: MatchListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentStat?: SortOrder
    isFirstRoundsValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TournamentWinner?: TournamentWinnerOrderByRelationAggregateInput
    TournamentElimination?: TournamentEliminationOrderByRelationAggregateInput
    TournamentGroup?: TournamentGroupOrderByRelationAggregateInput
    PlayerTournament?: PlayerTournamentOrderByRelationAggregateInput
    Match?: MatchOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    tournamentStat?: EnumTournamentStatFilter<"Tournament"> | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFilter<"Tournament"> | boolean
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    TournamentWinner?: TournamentWinnerListRelationFilter
    TournamentElimination?: TournamentEliminationListRelationFilter
    TournamentGroup?: TournamentGroupListRelationFilter
    PlayerTournament?: PlayerTournamentListRelationFilter
    Match?: MatchListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentStat?: SortOrder
    isFirstRoundsValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tournament"> | number
    name?: StringWithAggregatesFilter<"Tournament"> | string
    tournamentStat?: EnumTournamentStatWithAggregatesFilter<"Tournament"> | $Enums.TournamentStat
    isFirstRoundsValid?: BoolWithAggregatesFilter<"Tournament"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type TournamentEliminationWhereInput = {
    AND?: TournamentEliminationWhereInput | TournamentEliminationWhereInput[]
    OR?: TournamentEliminationWhereInput[]
    NOT?: TournamentEliminationWhereInput | TournamentEliminationWhereInput[]
    id?: IntFilter<"TournamentElimination"> | number
    tournamentId?: IntFilter<"TournamentElimination"> | number
    currentRound?: IntFilter<"TournamentElimination"> | number
    eliminationType?: EnumEliminationTypeFilter<"TournamentElimination"> | $Enums.EliminationType
    bronzeMatchId?: IntNullableFilter<"TournamentElimination"> | number | null
    isLosersBracketPlayerWins?: BoolFilter<"TournamentElimination"> | boolean
    isEliminationsOver?: BoolFilter<"TournamentElimination"> | boolean
    winnersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    losersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    createdAt?: DateTimeFilter<"TournamentElimination"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentElimination"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    BronzeMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    WinnersBracketByePlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    LosersBracketByePlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }

  export type TournamentEliminationOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    eliminationType?: SortOrder
    bronzeMatchId?: SortOrderInput | SortOrder
    isLosersBracketPlayerWins?: SortOrder
    isEliminationsOver?: SortOrder
    winnersBracketByePlayerId?: SortOrderInput | SortOrder
    losersBracketByePlayerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    BronzeMatch?: MatchOrderByWithRelationInput
    WinnersBracketByePlayer?: PlayerOrderByWithRelationInput
    LosersBracketByePlayer?: PlayerOrderByWithRelationInput
  }

  export type TournamentEliminationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentEliminationWhereInput | TournamentEliminationWhereInput[]
    OR?: TournamentEliminationWhereInput[]
    NOT?: TournamentEliminationWhereInput | TournamentEliminationWhereInput[]
    tournamentId?: IntFilter<"TournamentElimination"> | number
    currentRound?: IntFilter<"TournamentElimination"> | number
    eliminationType?: EnumEliminationTypeFilter<"TournamentElimination"> | $Enums.EliminationType
    bronzeMatchId?: IntNullableFilter<"TournamentElimination"> | number | null
    isLosersBracketPlayerWins?: BoolFilter<"TournamentElimination"> | boolean
    isEliminationsOver?: BoolFilter<"TournamentElimination"> | boolean
    winnersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    losersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    createdAt?: DateTimeFilter<"TournamentElimination"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentElimination"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    BronzeMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    WinnersBracketByePlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    LosersBracketByePlayer?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
  }, "id">

  export type TournamentEliminationOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    eliminationType?: SortOrder
    bronzeMatchId?: SortOrderInput | SortOrder
    isLosersBracketPlayerWins?: SortOrder
    isEliminationsOver?: SortOrder
    winnersBracketByePlayerId?: SortOrderInput | SortOrder
    losersBracketByePlayerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentEliminationCountOrderByAggregateInput
    _avg?: TournamentEliminationAvgOrderByAggregateInput
    _max?: TournamentEliminationMaxOrderByAggregateInput
    _min?: TournamentEliminationMinOrderByAggregateInput
    _sum?: TournamentEliminationSumOrderByAggregateInput
  }

  export type TournamentEliminationScalarWhereWithAggregatesInput = {
    AND?: TournamentEliminationScalarWhereWithAggregatesInput | TournamentEliminationScalarWhereWithAggregatesInput[]
    OR?: TournamentEliminationScalarWhereWithAggregatesInput[]
    NOT?: TournamentEliminationScalarWhereWithAggregatesInput | TournamentEliminationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TournamentElimination"> | number
    tournamentId?: IntWithAggregatesFilter<"TournamentElimination"> | number
    currentRound?: IntWithAggregatesFilter<"TournamentElimination"> | number
    eliminationType?: EnumEliminationTypeWithAggregatesFilter<"TournamentElimination"> | $Enums.EliminationType
    bronzeMatchId?: IntNullableWithAggregatesFilter<"TournamentElimination"> | number | null
    isLosersBracketPlayerWins?: BoolWithAggregatesFilter<"TournamentElimination"> | boolean
    isEliminationsOver?: BoolWithAggregatesFilter<"TournamentElimination"> | boolean
    winnersBracketByePlayerId?: IntNullableWithAggregatesFilter<"TournamentElimination"> | number | null
    losersBracketByePlayerId?: IntNullableWithAggregatesFilter<"TournamentElimination"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TournamentElimination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentElimination"> | Date | string
  }

  export type TournamentGroupWhereInput = {
    AND?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    OR?: TournamentGroupWhereInput[]
    NOT?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    id?: IntFilter<"TournamentGroup"> | number
    tournamentId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }

  export type TournamentGroupOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tournament?: TournamentOrderByWithRelationInput
  }

  export type TournamentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    OR?: TournamentGroupWhereInput[]
    NOT?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    tournamentId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }, "id">

  export type TournamentGroupOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentGroupCountOrderByAggregateInput
    _avg?: TournamentGroupAvgOrderByAggregateInput
    _max?: TournamentGroupMaxOrderByAggregateInput
    _min?: TournamentGroupMinOrderByAggregateInput
    _sum?: TournamentGroupSumOrderByAggregateInput
  }

  export type TournamentGroupScalarWhereWithAggregatesInput = {
    AND?: TournamentGroupScalarWhereWithAggregatesInput | TournamentGroupScalarWhereWithAggregatesInput[]
    OR?: TournamentGroupScalarWhereWithAggregatesInput[]
    NOT?: TournamentGroupScalarWhereWithAggregatesInput | TournamentGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TournamentGroup"> | number
    tournamentId?: IntWithAggregatesFilter<"TournamentGroup"> | number
    groupNumber?: IntWithAggregatesFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolWithAggregatesFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentGroup"> | Date | string
  }

  export type TournamentWinnerWhereInput = {
    AND?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    OR?: TournamentWinnerWhereInput[]
    NOT?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    id?: IntFilter<"TournamentWinner"> | number
    tournamentId?: IntFilter<"TournamentWinner"> | number
    playerId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type TournamentWinnerOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tournament?: TournamentOrderByWithRelationInput
    Player?: PlayerOrderByWithRelationInput
  }

  export type TournamentWinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    OR?: TournamentWinnerWhereInput[]
    NOT?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    tournamentId?: IntFilter<"TournamentWinner"> | number
    playerId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    Tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    Player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type TournamentWinnerOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentWinnerCountOrderByAggregateInput
    _avg?: TournamentWinnerAvgOrderByAggregateInput
    _max?: TournamentWinnerMaxOrderByAggregateInput
    _min?: TournamentWinnerMinOrderByAggregateInput
    _sum?: TournamentWinnerSumOrderByAggregateInput
  }

  export type TournamentWinnerScalarWhereWithAggregatesInput = {
    AND?: TournamentWinnerScalarWhereWithAggregatesInput | TournamentWinnerScalarWhereWithAggregatesInput[]
    OR?: TournamentWinnerScalarWhereWithAggregatesInput[]
    NOT?: TournamentWinnerScalarWhereWithAggregatesInput | TournamentWinnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TournamentWinner"> | number
    tournamentId?: IntWithAggregatesFilter<"TournamentWinner"> | number
    playerId?: IntWithAggregatesFilter<"TournamentWinner"> | number
    place?: IntWithAggregatesFilter<"TournamentWinner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentWinner"> | Date | string
  }

  export type MatchCreateInput = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutMatchInput
    Player1?: PlayerCreateNestedOneWithoutMatchPlayer1Input
    Player2?: PlayerCreateNestedOneWithoutMatchPlayer2Input
    Winner?: PlayerCreateNestedOneWithoutMatchWinnerInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUpdateInput = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    Player1?: PlayerUpdateOneWithoutMatchPlayer1NestedInput
    Player2?: PlayerUpdateOneWithoutMatchPlayer2NestedInput
    Winner?: PlayerUpdateOneWithoutMatchWinnerNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentCreateInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutPlayerTournamentInput
    Player: PlayerCreateNestedOneWithoutPlayerTournamentInput
  }

  export type PlayerTournamentUncheckedCreateInput = {
    id?: number
    playerId: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentUpdateInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutPlayerTournamentNestedInput
    Player?: PlayerUpdateOneRequiredWithoutPlayerTournamentNestedInput
  }

  export type PlayerTournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentCreateManyInput = {
    id?: number
    playerId: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentUpdateManyMutationInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutTournamentInput
    Match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput
    Match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutTournamentNestedInput
    Match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    Match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationCreateInput = {
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentEliminationInput
    BronzeMatch?: MatchCreateNestedOneWithoutTournamentEliminationInput
    WinnersBracketByePlayer?: PlayerCreateNestedOneWithoutWinnersByeEliminationsInput
    LosersBracketByePlayer?: PlayerCreateNestedOneWithoutLosersByeEliminationsInput
  }

  export type TournamentEliminationUncheckedCreateInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationUpdateInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentEliminationNestedInput
    BronzeMatch?: MatchUpdateOneWithoutTournamentEliminationNestedInput
    WinnersBracketByePlayer?: PlayerUpdateOneWithoutWinnersByeEliminationsNestedInput
    LosersBracketByePlayer?: PlayerUpdateOneWithoutLosersByeEliminationsNestedInput
  }

  export type TournamentEliminationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationCreateManyInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationUpdateManyMutationInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupCreateInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentGroupInput
  }

  export type TournamentGroupUncheckedCreateInput = {
    id?: number
    tournamentId: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupUpdateInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupCreateManyInput = {
    id?: number
    tournamentId: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupUpdateManyMutationInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerCreateInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentWinnerInput
    Player: PlayerCreateNestedOneWithoutTournamentWinnerInput
  }

  export type TournamentWinnerUncheckedCreateInput = {
    id?: number
    tournamentId: number
    playerId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerUpdateInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentWinnerNestedInput
    Player?: PlayerUpdateOneRequiredWithoutTournamentWinnerNestedInput
  }

  export type TournamentWinnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerCreateManyInput = {
    id?: number
    tournamentId: number
    playerId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerUpdateManyMutationInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumKnockoutMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KnockoutMatchType | EnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel> | $Enums.KnockoutMatchType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type PlayerNullableScalarRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type TournamentEliminationListRelationFilter = {
    every?: TournamentEliminationWhereInput
    some?: TournamentEliminationWhereInput
    none?: TournamentEliminationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TournamentEliminationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    group?: SortOrder
    isKnockoutMatch?: SortOrder
    knockoutRound?: SortOrder
    knockoutMatchType?: SortOrder
    isDoubleEliminationMatch?: SortOrder
    isWinnersBracketMatch?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    serialNumber?: SortOrder
    group?: SortOrder
    knockoutRound?: SortOrder
    nextMatchId?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    group?: SortOrder
    isKnockoutMatch?: SortOrder
    knockoutRound?: SortOrder
    knockoutMatchType?: SortOrder
    isDoubleEliminationMatch?: SortOrder
    isWinnersBracketMatch?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    group?: SortOrder
    isKnockoutMatch?: SortOrder
    knockoutRound?: SortOrder
    knockoutMatchType?: SortOrder
    isDoubleEliminationMatch?: SortOrder
    isWinnersBracketMatch?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    serialNumber?: SortOrder
    group?: SortOrder
    knockoutRound?: SortOrder
    nextMatchId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumKnockoutMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KnockoutMatchType | EnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKnockoutMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.KnockoutMatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TournamentWinnerListRelationFilter = {
    every?: TournamentWinnerWhereInput
    some?: TournamentWinnerWhereInput
    none?: TournamentWinnerWhereInput
  }

  export type PlayerTournamentListRelationFilter = {
    every?: PlayerTournamentWhereInput
    some?: PlayerTournamentWhereInput
    none?: PlayerTournamentWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type TournamentWinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerTournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrder
    elo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrder
    elo?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrder
    elo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrder
    elo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    overallWins?: SortOrder
    overallLosses?: SortOrder
    group?: SortOrder
    elo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type PlayerTournamentCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerTournamentAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type PlayerTournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerTournamentMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerTournamentSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type EnumTournamentStatFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStat | EnumTournamentStatFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatFilter<$PrismaModel> | $Enums.TournamentStat
  }

  export type TournamentGroupListRelationFilter = {
    every?: TournamentGroupWhereInput
    some?: TournamentGroupWhereInput
    none?: TournamentGroupWhereInput
  }

  export type TournamentGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentStat?: SortOrder
    isFirstRoundsValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentStat?: SortOrder
    isFirstRoundsValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentStat?: SortOrder
    isFirstRoundsValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTournamentStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStat | EnumTournamentStatFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatFilter<$PrismaModel>
  }

  export type EnumEliminationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeFilter<$PrismaModel> | $Enums.EliminationType
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type TournamentEliminationCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    eliminationType?: SortOrder
    bronzeMatchId?: SortOrder
    isLosersBracketPlayerWins?: SortOrder
    isEliminationsOver?: SortOrder
    winnersBracketByePlayerId?: SortOrder
    losersBracketByePlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentEliminationAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    bronzeMatchId?: SortOrder
    winnersBracketByePlayerId?: SortOrder
    losersBracketByePlayerId?: SortOrder
  }

  export type TournamentEliminationMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    eliminationType?: SortOrder
    bronzeMatchId?: SortOrder
    isLosersBracketPlayerWins?: SortOrder
    isEliminationsOver?: SortOrder
    winnersBracketByePlayerId?: SortOrder
    losersBracketByePlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentEliminationMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    eliminationType?: SortOrder
    bronzeMatchId?: SortOrder
    isLosersBracketPlayerWins?: SortOrder
    isEliminationsOver?: SortOrder
    winnersBracketByePlayerId?: SortOrder
    losersBracketByePlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentEliminationSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    currentRound?: SortOrder
    bronzeMatchId?: SortOrder
    winnersBracketByePlayerId?: SortOrder
    losersBracketByePlayerId?: SortOrder
  }

  export type EnumEliminationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EliminationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEliminationTypeFilter<$PrismaModel>
    _max?: NestedEnumEliminationTypeFilter<$PrismaModel>
  }

  export type TournamentGroupCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
  }

  export type TournamentGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    groupNumber?: SortOrder
  }

  export type TournamentWinnerCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
  }

  export type TournamentWinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    playerId?: SortOrder
    place?: SortOrder
  }

  export type TournamentCreateNestedOneWithoutMatchInput = {
    create?: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchInput
    connect?: TournamentWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutMatchPlayer1Input = {
    create?: XOR<PlayerCreateWithoutMatchPlayer1Input, PlayerUncheckedCreateWithoutMatchPlayer1Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchPlayer1Input
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutMatchPlayer2Input = {
    create?: XOR<PlayerCreateWithoutMatchPlayer2Input, PlayerUncheckedCreateWithoutMatchPlayer2Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchPlayer2Input
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutMatchWinnerInput = {
    create?: XOR<PlayerCreateWithoutMatchWinnerInput, PlayerUncheckedCreateWithoutMatchWinnerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchWinnerInput
    connect?: PlayerWhereUniqueInput
  }

  export type TournamentEliminationCreateNestedManyWithoutBronzeMatchInput = {
    create?: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput> | TournamentEliminationCreateWithoutBronzeMatchInput[] | TournamentEliminationUncheckedCreateWithoutBronzeMatchInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutBronzeMatchInput | TournamentEliminationCreateOrConnectWithoutBronzeMatchInput[]
    createMany?: TournamentEliminationCreateManyBronzeMatchInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput = {
    create?: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput> | TournamentEliminationCreateWithoutBronzeMatchInput[] | TournamentEliminationUncheckedCreateWithoutBronzeMatchInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutBronzeMatchInput | TournamentEliminationCreateOrConnectWithoutBronzeMatchInput[]
    createMany?: TournamentEliminationCreateManyBronzeMatchInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumKnockoutMatchTypeFieldUpdateOperationsInput = {
    set?: $Enums.KnockoutMatchType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TournamentUpdateOneRequiredWithoutMatchNestedInput = {
    create?: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchInput
    upsert?: TournamentUpsertWithoutMatchInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutMatchInput, TournamentUpdateWithoutMatchInput>, TournamentUncheckedUpdateWithoutMatchInput>
  }

  export type PlayerUpdateOneWithoutMatchPlayer1NestedInput = {
    create?: XOR<PlayerCreateWithoutMatchPlayer1Input, PlayerUncheckedCreateWithoutMatchPlayer1Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchPlayer1Input
    upsert?: PlayerUpsertWithoutMatchPlayer1Input
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMatchPlayer1Input, PlayerUpdateWithoutMatchPlayer1Input>, PlayerUncheckedUpdateWithoutMatchPlayer1Input>
  }

  export type PlayerUpdateOneWithoutMatchPlayer2NestedInput = {
    create?: XOR<PlayerCreateWithoutMatchPlayer2Input, PlayerUncheckedCreateWithoutMatchPlayer2Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchPlayer2Input
    upsert?: PlayerUpsertWithoutMatchPlayer2Input
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMatchPlayer2Input, PlayerUpdateWithoutMatchPlayer2Input>, PlayerUncheckedUpdateWithoutMatchPlayer2Input>
  }

  export type PlayerUpdateOneWithoutMatchWinnerNestedInput = {
    create?: XOR<PlayerCreateWithoutMatchWinnerInput, PlayerUncheckedCreateWithoutMatchWinnerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchWinnerInput
    upsert?: PlayerUpsertWithoutMatchWinnerInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMatchWinnerInput, PlayerUpdateWithoutMatchWinnerInput>, PlayerUncheckedUpdateWithoutMatchWinnerInput>
  }

  export type TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput> | TournamentEliminationCreateWithoutBronzeMatchInput[] | TournamentEliminationUncheckedCreateWithoutBronzeMatchInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutBronzeMatchInput | TournamentEliminationCreateOrConnectWithoutBronzeMatchInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutBronzeMatchInput | TournamentEliminationUpsertWithWhereUniqueWithoutBronzeMatchInput[]
    createMany?: TournamentEliminationCreateManyBronzeMatchInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutBronzeMatchInput | TournamentEliminationUpdateWithWhereUniqueWithoutBronzeMatchInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutBronzeMatchInput | TournamentEliminationUpdateManyWithWhereWithoutBronzeMatchInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput> | TournamentEliminationCreateWithoutBronzeMatchInput[] | TournamentEliminationUncheckedCreateWithoutBronzeMatchInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutBronzeMatchInput | TournamentEliminationCreateOrConnectWithoutBronzeMatchInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutBronzeMatchInput | TournamentEliminationUpsertWithWhereUniqueWithoutBronzeMatchInput[]
    createMany?: TournamentEliminationCreateManyBronzeMatchInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutBronzeMatchInput | TournamentEliminationUpdateWithWhereUniqueWithoutBronzeMatchInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutBronzeMatchInput | TournamentEliminationUpdateManyWithWhereWithoutBronzeMatchInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type TournamentWinnerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput> | TournamentWinnerCreateWithoutPlayerInput[] | TournamentWinnerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutPlayerInput | TournamentWinnerCreateOrConnectWithoutPlayerInput[]
    createMany?: TournamentWinnerCreateManyPlayerInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput = {
    create?: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput> | TournamentEliminationCreateWithoutWinnersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyWinnersBracketByePlayerInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput = {
    create?: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput> | TournamentEliminationCreateWithoutLosersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyLosersBracketByePlayerInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type PlayerTournamentCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput> | PlayerTournamentCreateWithoutPlayerInput[] | PlayerTournamentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutPlayerInput | PlayerTournamentCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTournamentCreateManyPlayerInputEnvelope
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput> | TournamentWinnerCreateWithoutPlayerInput[] | TournamentWinnerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutPlayerInput | TournamentWinnerCreateOrConnectWithoutPlayerInput[]
    createMany?: TournamentWinnerCreateManyPlayerInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput = {
    create?: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput> | TournamentEliminationCreateWithoutWinnersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyWinnersBracketByePlayerInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput = {
    create?: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput> | TournamentEliminationCreateWithoutLosersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyLosersBracketByePlayerInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput> | PlayerTournamentCreateWithoutPlayerInput[] | PlayerTournamentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutPlayerInput | PlayerTournamentCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTournamentCreateManyPlayerInputEnvelope
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TournamentWinnerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput> | TournamentWinnerCreateWithoutPlayerInput[] | TournamentWinnerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutPlayerInput | TournamentWinnerCreateOrConnectWithoutPlayerInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutPlayerInput | TournamentWinnerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TournamentWinnerCreateManyPlayerInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutPlayerInput | TournamentWinnerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutPlayerInput | TournamentWinnerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput> | TournamentEliminationCreateWithoutWinnersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutWinnersBracketByePlayerInput | TournamentEliminationUpsertWithWhereUniqueWithoutWinnersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyWinnersBracketByePlayerInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutWinnersBracketByePlayerInput | TournamentEliminationUpdateWithWhereUniqueWithoutWinnersBracketByePlayerInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutWinnersBracketByePlayerInput | TournamentEliminationUpdateManyWithWhereWithoutWinnersBracketByePlayerInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput> | TournamentEliminationCreateWithoutLosersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutLosersBracketByePlayerInput | TournamentEliminationUpsertWithWhereUniqueWithoutLosersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyLosersBracketByePlayerInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutLosersBracketByePlayerInput | TournamentEliminationUpdateWithWhereUniqueWithoutLosersBracketByePlayerInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutLosersBracketByePlayerInput | TournamentEliminationUpdateManyWithWhereWithoutLosersBracketByePlayerInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type PlayerTournamentUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput> | PlayerTournamentCreateWithoutPlayerInput[] | PlayerTournamentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutPlayerInput | PlayerTournamentCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTournamentUpsertWithWhereUniqueWithoutPlayerInput | PlayerTournamentUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTournamentCreateManyPlayerInputEnvelope
    set?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    disconnect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    delete?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    update?: PlayerTournamentUpdateWithWhereUniqueWithoutPlayerInput | PlayerTournamentUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTournamentUpdateManyWithWhereWithoutPlayerInput | PlayerTournamentUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput> | TournamentWinnerCreateWithoutPlayerInput[] | TournamentWinnerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutPlayerInput | TournamentWinnerCreateOrConnectWithoutPlayerInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutPlayerInput | TournamentWinnerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TournamentWinnerCreateManyPlayerInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutPlayerInput | TournamentWinnerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutPlayerInput | TournamentWinnerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput> | TournamentEliminationCreateWithoutWinnersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutWinnersBracketByePlayerInput | TournamentEliminationUpsertWithWhereUniqueWithoutWinnersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyWinnersBracketByePlayerInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutWinnersBracketByePlayerInput | TournamentEliminationUpdateWithWhereUniqueWithoutWinnersBracketByePlayerInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutWinnersBracketByePlayerInput | TournamentEliminationUpdateManyWithWhereWithoutWinnersBracketByePlayerInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput> | TournamentEliminationCreateWithoutLosersBracketByePlayerInput[] | TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput | TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutLosersBracketByePlayerInput | TournamentEliminationUpsertWithWhereUniqueWithoutLosersBracketByePlayerInput[]
    createMany?: TournamentEliminationCreateManyLosersBracketByePlayerInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutLosersBracketByePlayerInput | TournamentEliminationUpdateWithWhereUniqueWithoutLosersBracketByePlayerInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutLosersBracketByePlayerInput | TournamentEliminationUpdateManyWithWhereWithoutLosersBracketByePlayerInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput> | PlayerTournamentCreateWithoutPlayerInput[] | PlayerTournamentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutPlayerInput | PlayerTournamentCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTournamentUpsertWithWhereUniqueWithoutPlayerInput | PlayerTournamentUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTournamentCreateManyPlayerInputEnvelope
    set?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    disconnect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    delete?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    update?: PlayerTournamentUpdateWithWhereUniqueWithoutPlayerInput | PlayerTournamentUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTournamentUpdateManyWithWhereWithoutPlayerInput | PlayerTournamentUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutPlayerTournamentInput = {
    create?: XOR<TournamentCreateWithoutPlayerTournamentInput, TournamentUncheckedCreateWithoutPlayerTournamentInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPlayerTournamentInput
    connect?: TournamentWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutPlayerTournamentInput = {
    create?: XOR<PlayerCreateWithoutPlayerTournamentInput, PlayerUncheckedCreateWithoutPlayerTournamentInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerTournamentInput
    connect?: PlayerWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutPlayerTournamentNestedInput = {
    create?: XOR<TournamentCreateWithoutPlayerTournamentInput, TournamentUncheckedCreateWithoutPlayerTournamentInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPlayerTournamentInput
    upsert?: TournamentUpsertWithoutPlayerTournamentInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutPlayerTournamentInput, TournamentUpdateWithoutPlayerTournamentInput>, TournamentUncheckedUpdateWithoutPlayerTournamentInput>
  }

  export type PlayerUpdateOneRequiredWithoutPlayerTournamentNestedInput = {
    create?: XOR<PlayerCreateWithoutPlayerTournamentInput, PlayerUncheckedCreateWithoutPlayerTournamentInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerTournamentInput
    upsert?: PlayerUpsertWithoutPlayerTournamentInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPlayerTournamentInput, PlayerUpdateWithoutPlayerTournamentInput>, PlayerUncheckedUpdateWithoutPlayerTournamentInput>
  }

  export type TournamentWinnerCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type TournamentEliminationCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput> | TournamentEliminationCreateWithoutTournamentInput[] | TournamentEliminationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutTournamentInput | TournamentEliminationCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentEliminationCreateManyTournamentInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type TournamentGroupCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput> | TournamentGroupCreateWithoutTournamentInput[] | TournamentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentInput | TournamentGroupCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentGroupCreateManyTournamentInputEnvelope
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
  }

  export type PlayerTournamentCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput> | PlayerTournamentCreateWithoutTournamentInput[] | PlayerTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutTournamentInput | PlayerTournamentCreateOrConnectWithoutTournamentInput[]
    createMany?: PlayerTournamentCreateManyTournamentInputEnvelope
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput> | TournamentEliminationCreateWithoutTournamentInput[] | TournamentEliminationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutTournamentInput | TournamentEliminationCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentEliminationCreateManyTournamentInputEnvelope
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
  }

  export type TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput> | TournamentGroupCreateWithoutTournamentInput[] | TournamentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentInput | TournamentGroupCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentGroupCreateManyTournamentInputEnvelope
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
  }

  export type PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput> | PlayerTournamentCreateWithoutTournamentInput[] | PlayerTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutTournamentInput | PlayerTournamentCreateOrConnectWithoutTournamentInput[]
    createMany?: PlayerTournamentCreateManyTournamentInputEnvelope
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type EnumTournamentStatFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStat
  }

  export type TournamentWinnerUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutTournamentInput | TournamentWinnerUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutTournamentInput | TournamentWinnerUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutTournamentInput | TournamentWinnerUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type TournamentEliminationUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput> | TournamentEliminationCreateWithoutTournamentInput[] | TournamentEliminationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutTournamentInput | TournamentEliminationCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutTournamentInput | TournamentEliminationUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentEliminationCreateManyTournamentInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutTournamentInput | TournamentEliminationUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutTournamentInput | TournamentEliminationUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type TournamentGroupUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput> | TournamentGroupCreateWithoutTournamentInput[] | TournamentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentInput | TournamentGroupCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentGroupUpsertWithWhereUniqueWithoutTournamentInput | TournamentGroupUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentGroupCreateManyTournamentInputEnvelope
    set?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    disconnect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    delete?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    update?: TournamentGroupUpdateWithWhereUniqueWithoutTournamentInput | TournamentGroupUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentGroupUpdateManyWithWhereWithoutTournamentInput | TournamentGroupUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
  }

  export type PlayerTournamentUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput> | PlayerTournamentCreateWithoutTournamentInput[] | PlayerTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutTournamentInput | PlayerTournamentCreateOrConnectWithoutTournamentInput[]
    upsert?: PlayerTournamentUpsertWithWhereUniqueWithoutTournamentInput | PlayerTournamentUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PlayerTournamentCreateManyTournamentInputEnvelope
    set?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    disconnect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    delete?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    update?: PlayerTournamentUpdateWithWhereUniqueWithoutTournamentInput | PlayerTournamentUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PlayerTournamentUpdateManyWithWhereWithoutTournamentInput | PlayerTournamentUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutTournamentInput | TournamentWinnerUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutTournamentInput | TournamentWinnerUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutTournamentInput | TournamentWinnerUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput> | TournamentEliminationCreateWithoutTournamentInput[] | TournamentEliminationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEliminationCreateOrConnectWithoutTournamentInput | TournamentEliminationCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentEliminationUpsertWithWhereUniqueWithoutTournamentInput | TournamentEliminationUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentEliminationCreateManyTournamentInputEnvelope
    set?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    disconnect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    delete?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    connect?: TournamentEliminationWhereUniqueInput | TournamentEliminationWhereUniqueInput[]
    update?: TournamentEliminationUpdateWithWhereUniqueWithoutTournamentInput | TournamentEliminationUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentEliminationUpdateManyWithWhereWithoutTournamentInput | TournamentEliminationUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
  }

  export type TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput> | TournamentGroupCreateWithoutTournamentInput[] | TournamentGroupUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentInput | TournamentGroupCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentGroupUpsertWithWhereUniqueWithoutTournamentInput | TournamentGroupUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentGroupCreateManyTournamentInputEnvelope
    set?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    disconnect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    delete?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    update?: TournamentGroupUpdateWithWhereUniqueWithoutTournamentInput | TournamentGroupUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentGroupUpdateManyWithWhereWithoutTournamentInput | TournamentGroupUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
  }

  export type PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput> | PlayerTournamentCreateWithoutTournamentInput[] | PlayerTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PlayerTournamentCreateOrConnectWithoutTournamentInput | PlayerTournamentCreateOrConnectWithoutTournamentInput[]
    upsert?: PlayerTournamentUpsertWithWhereUniqueWithoutTournamentInput | PlayerTournamentUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PlayerTournamentCreateManyTournamentInputEnvelope
    set?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    disconnect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    delete?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    connect?: PlayerTournamentWhereUniqueInput | PlayerTournamentWhereUniqueInput[]
    update?: PlayerTournamentUpdateWithWhereUniqueWithoutTournamentInput | PlayerTournamentUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PlayerTournamentUpdateManyWithWhereWithoutTournamentInput | PlayerTournamentUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutTournamentEliminationInput = {
    create?: XOR<TournamentCreateWithoutTournamentEliminationInput, TournamentUncheckedCreateWithoutTournamentEliminationInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentEliminationInput
    connect?: TournamentWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutTournamentEliminationInput = {
    create?: XOR<MatchCreateWithoutTournamentEliminationInput, MatchUncheckedCreateWithoutTournamentEliminationInput>
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentEliminationInput
    connect?: MatchWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutWinnersByeEliminationsInput = {
    create?: XOR<PlayerCreateWithoutWinnersByeEliminationsInput, PlayerUncheckedCreateWithoutWinnersByeEliminationsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWinnersByeEliminationsInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutLosersByeEliminationsInput = {
    create?: XOR<PlayerCreateWithoutLosersByeEliminationsInput, PlayerUncheckedCreateWithoutLosersByeEliminationsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLosersByeEliminationsInput
    connect?: PlayerWhereUniqueInput
  }

  export type EnumEliminationTypeFieldUpdateOperationsInput = {
    set?: $Enums.EliminationType
  }

  export type TournamentUpdateOneRequiredWithoutTournamentEliminationNestedInput = {
    create?: XOR<TournamentCreateWithoutTournamentEliminationInput, TournamentUncheckedCreateWithoutTournamentEliminationInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentEliminationInput
    upsert?: TournamentUpsertWithoutTournamentEliminationInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTournamentEliminationInput, TournamentUpdateWithoutTournamentEliminationInput>, TournamentUncheckedUpdateWithoutTournamentEliminationInput>
  }

  export type MatchUpdateOneWithoutTournamentEliminationNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentEliminationInput, MatchUncheckedCreateWithoutTournamentEliminationInput>
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentEliminationInput
    upsert?: MatchUpsertWithoutTournamentEliminationInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutTournamentEliminationInput, MatchUpdateWithoutTournamentEliminationInput>, MatchUncheckedUpdateWithoutTournamentEliminationInput>
  }

  export type PlayerUpdateOneWithoutWinnersByeEliminationsNestedInput = {
    create?: XOR<PlayerCreateWithoutWinnersByeEliminationsInput, PlayerUncheckedCreateWithoutWinnersByeEliminationsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWinnersByeEliminationsInput
    upsert?: PlayerUpsertWithoutWinnersByeEliminationsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutWinnersByeEliminationsInput, PlayerUpdateWithoutWinnersByeEliminationsInput>, PlayerUncheckedUpdateWithoutWinnersByeEliminationsInput>
  }

  export type PlayerUpdateOneWithoutLosersByeEliminationsNestedInput = {
    create?: XOR<PlayerCreateWithoutLosersByeEliminationsInput, PlayerUncheckedCreateWithoutLosersByeEliminationsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLosersByeEliminationsInput
    upsert?: PlayerUpsertWithoutLosersByeEliminationsInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutLosersByeEliminationsInput, PlayerUpdateWithoutLosersByeEliminationsInput>, PlayerUncheckedUpdateWithoutLosersByeEliminationsInput>
  }

  export type TournamentCreateNestedOneWithoutTournamentGroupInput = {
    create?: XOR<TournamentCreateWithoutTournamentGroupInput, TournamentUncheckedCreateWithoutTournamentGroupInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentGroupInput
    connect?: TournamentWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutTournamentGroupNestedInput = {
    create?: XOR<TournamentCreateWithoutTournamentGroupInput, TournamentUncheckedCreateWithoutTournamentGroupInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentGroupInput
    upsert?: TournamentUpsertWithoutTournamentGroupInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTournamentGroupInput, TournamentUpdateWithoutTournamentGroupInput>, TournamentUncheckedUpdateWithoutTournamentGroupInput>
  }

  export type TournamentCreateNestedOneWithoutTournamentWinnerInput = {
    create?: XOR<TournamentCreateWithoutTournamentWinnerInput, TournamentUncheckedCreateWithoutTournamentWinnerInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentWinnerInput
    connect?: TournamentWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutTournamentWinnerInput = {
    create?: XOR<PlayerCreateWithoutTournamentWinnerInput, PlayerUncheckedCreateWithoutTournamentWinnerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentWinnerInput
    connect?: PlayerWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutTournamentWinnerNestedInput = {
    create?: XOR<TournamentCreateWithoutTournamentWinnerInput, TournamentUncheckedCreateWithoutTournamentWinnerInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentWinnerInput
    upsert?: TournamentUpsertWithoutTournamentWinnerInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTournamentWinnerInput, TournamentUpdateWithoutTournamentWinnerInput>, TournamentUncheckedUpdateWithoutTournamentWinnerInput>
  }

  export type PlayerUpdateOneRequiredWithoutTournamentWinnerNestedInput = {
    create?: XOR<PlayerCreateWithoutTournamentWinnerInput, PlayerUncheckedCreateWithoutTournamentWinnerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentWinnerInput
    upsert?: PlayerUpsertWithoutTournamentWinnerInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutTournamentWinnerInput, PlayerUpdateWithoutTournamentWinnerInput>, PlayerUncheckedUpdateWithoutTournamentWinnerInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumKnockoutMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KnockoutMatchType | EnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel> | $Enums.KnockoutMatchType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumKnockoutMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KnockoutMatchType | EnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnockoutMatchType[] | ListEnumKnockoutMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKnockoutMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.KnockoutMatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumKnockoutMatchTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTournamentStatFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStat | EnumTournamentStatFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatFilter<$PrismaModel> | $Enums.TournamentStat
  }

  export type NestedEnumTournamentStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStat | EnumTournamentStatFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStat[] | ListEnumTournamentStatFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatFilter<$PrismaModel>
  }

  export type NestedEnumEliminationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeFilter<$PrismaModel> | $Enums.EliminationType
  }

  export type NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EliminationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEliminationTypeFilter<$PrismaModel>
    _max?: NestedEnumEliminationTypeFilter<$PrismaModel>
  }

  export type TournamentCreateWithoutMatchInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutMatchInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutMatchInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
  }

  export type PlayerCreateWithoutMatchPlayer1Input = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutMatchPlayer1Input = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutMatchPlayer1Input = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchPlayer1Input, PlayerUncheckedCreateWithoutMatchPlayer1Input>
  }

  export type PlayerCreateWithoutMatchPlayer2Input = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutMatchPlayer2Input = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutMatchPlayer2Input = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchPlayer2Input, PlayerUncheckedCreateWithoutMatchPlayer2Input>
  }

  export type PlayerCreateWithoutMatchWinnerInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
  }

  export type PlayerUncheckedCreateWithoutMatchWinnerInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type PlayerCreateOrConnectWithoutMatchWinnerInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchWinnerInput, PlayerUncheckedCreateWithoutMatchWinnerInput>
  }

  export type TournamentEliminationCreateWithoutBronzeMatchInput = {
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentEliminationInput
    WinnersBracketByePlayer?: PlayerCreateNestedOneWithoutWinnersByeEliminationsInput
    LosersBracketByePlayer?: PlayerCreateNestedOneWithoutLosersByeEliminationsInput
  }

  export type TournamentEliminationUncheckedCreateWithoutBronzeMatchInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateOrConnectWithoutBronzeMatchInput = {
    where: TournamentEliminationWhereUniqueInput
    create: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput>
  }

  export type TournamentEliminationCreateManyBronzeMatchInputEnvelope = {
    data: TournamentEliminationCreateManyBronzeMatchInput | TournamentEliminationCreateManyBronzeMatchInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutMatchInput = {
    update: XOR<TournamentUpdateWithoutMatchInput, TournamentUncheckedUpdateWithoutMatchInput>
    create: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutMatchInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutMatchInput, TournamentUncheckedUpdateWithoutMatchInput>
  }

  export type TournamentUpdateWithoutMatchInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type PlayerUpsertWithoutMatchPlayer1Input = {
    update: XOR<PlayerUpdateWithoutMatchPlayer1Input, PlayerUncheckedUpdateWithoutMatchPlayer1Input>
    create: XOR<PlayerCreateWithoutMatchPlayer1Input, PlayerUncheckedCreateWithoutMatchPlayer1Input>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMatchPlayer1Input = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMatchPlayer1Input, PlayerUncheckedUpdateWithoutMatchPlayer1Input>
  }

  export type PlayerUpdateWithoutMatchPlayer1Input = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUpsertWithoutMatchPlayer2Input = {
    update: XOR<PlayerUpdateWithoutMatchPlayer2Input, PlayerUncheckedUpdateWithoutMatchPlayer2Input>
    create: XOR<PlayerCreateWithoutMatchPlayer2Input, PlayerUncheckedCreateWithoutMatchPlayer2Input>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMatchPlayer2Input = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMatchPlayer2Input, PlayerUncheckedUpdateWithoutMatchPlayer2Input>
  }

  export type PlayerUpdateWithoutMatchPlayer2Input = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUpsertWithoutMatchWinnerInput = {
    update: XOR<PlayerUpdateWithoutMatchWinnerInput, PlayerUncheckedUpdateWithoutMatchWinnerInput>
    create: XOR<PlayerCreateWithoutMatchWinnerInput, PlayerUncheckedCreateWithoutMatchWinnerInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMatchWinnerInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMatchWinnerInput, PlayerUncheckedUpdateWithoutMatchWinnerInput>
  }

  export type PlayerUpdateWithoutMatchWinnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type TournamentEliminationUpsertWithWhereUniqueWithoutBronzeMatchInput = {
    where: TournamentEliminationWhereUniqueInput
    update: XOR<TournamentEliminationUpdateWithoutBronzeMatchInput, TournamentEliminationUncheckedUpdateWithoutBronzeMatchInput>
    create: XOR<TournamentEliminationCreateWithoutBronzeMatchInput, TournamentEliminationUncheckedCreateWithoutBronzeMatchInput>
  }

  export type TournamentEliminationUpdateWithWhereUniqueWithoutBronzeMatchInput = {
    where: TournamentEliminationWhereUniqueInput
    data: XOR<TournamentEliminationUpdateWithoutBronzeMatchInput, TournamentEliminationUncheckedUpdateWithoutBronzeMatchInput>
  }

  export type TournamentEliminationUpdateManyWithWhereWithoutBronzeMatchInput = {
    where: TournamentEliminationScalarWhereInput
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchInput>
  }

  export type TournamentEliminationScalarWhereInput = {
    AND?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
    OR?: TournamentEliminationScalarWhereInput[]
    NOT?: TournamentEliminationScalarWhereInput | TournamentEliminationScalarWhereInput[]
    id?: IntFilter<"TournamentElimination"> | number
    tournamentId?: IntFilter<"TournamentElimination"> | number
    currentRound?: IntFilter<"TournamentElimination"> | number
    eliminationType?: EnumEliminationTypeFilter<"TournamentElimination"> | $Enums.EliminationType
    bronzeMatchId?: IntNullableFilter<"TournamentElimination"> | number | null
    isLosersBracketPlayerWins?: BoolFilter<"TournamentElimination"> | boolean
    isEliminationsOver?: BoolFilter<"TournamentElimination"> | boolean
    winnersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    losersBracketByePlayerId?: IntNullableFilter<"TournamentElimination"> | number | null
    createdAt?: DateTimeFilter<"TournamentElimination"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentElimination"> | Date | string
  }

  export type TournamentWinnerCreateWithoutPlayerInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentWinnerInput
  }

  export type TournamentWinnerUncheckedCreateWithoutPlayerInput = {
    id?: number
    tournamentId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerCreateOrConnectWithoutPlayerInput = {
    where: TournamentWinnerWhereUniqueInput
    create: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput>
  }

  export type TournamentWinnerCreateManyPlayerInputEnvelope = {
    data: TournamentWinnerCreateManyPlayerInput | TournamentWinnerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TournamentEliminationCreateWithoutWinnersBracketByePlayerInput = {
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentEliminationInput
    BronzeMatch?: MatchCreateNestedOneWithoutTournamentEliminationInput
    LosersBracketByePlayer?: PlayerCreateNestedOneWithoutLosersByeEliminationsInput
  }

  export type TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateOrConnectWithoutWinnersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    create: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput>
  }

  export type TournamentEliminationCreateManyWinnersBracketByePlayerInputEnvelope = {
    data: TournamentEliminationCreateManyWinnersBracketByePlayerInput | TournamentEliminationCreateManyWinnersBracketByePlayerInput[]
    skipDuplicates?: boolean
  }

  export type TournamentEliminationCreateWithoutLosersBracketByePlayerInput = {
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutTournamentEliminationInput
    BronzeMatch?: MatchCreateNestedOneWithoutTournamentEliminationInput
    WinnersBracketByePlayer?: PlayerCreateNestedOneWithoutWinnersByeEliminationsInput
  }

  export type TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateOrConnectWithoutLosersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    create: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput>
  }

  export type TournamentEliminationCreateManyLosersBracketByePlayerInputEnvelope = {
    data: TournamentEliminationCreateManyLosersBracketByePlayerInput | TournamentEliminationCreateManyLosersBracketByePlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTournamentCreateWithoutPlayerInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutPlayerTournamentInput
  }

  export type PlayerTournamentUncheckedCreateWithoutPlayerInput = {
    id?: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentCreateOrConnectWithoutPlayerInput = {
    where: PlayerTournamentWhereUniqueInput
    create: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTournamentCreateManyPlayerInputEnvelope = {
    data: PlayerTournamentCreateManyPlayerInput | PlayerTournamentCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer1Input = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutMatchInput
    Player2?: PlayerCreateNestedOneWithoutMatchPlayer2Input
    Winner?: PlayerCreateNestedOneWithoutMatchWinnerInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer1Input = {
    id?: number
    tournamentId: number
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchCreateManyPlayer1InputEnvelope = {
    data: MatchCreateManyPlayer1Input | MatchCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer2Input = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutMatchInput
    Player1?: PlayerCreateNestedOneWithoutMatchPlayer1Input
    Winner?: PlayerCreateNestedOneWithoutMatchWinnerInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer2Input = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchCreateManyPlayer2InputEnvelope = {
    data: MatchCreateManyPlayer2Input | MatchCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutMatchInput
    Player1?: PlayerCreateNestedOneWithoutMatchPlayer1Input
    Player2?: PlayerCreateNestedOneWithoutMatchPlayer2Input
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    player2Id?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type TournamentWinnerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: TournamentWinnerWhereUniqueInput
    update: XOR<TournamentWinnerUpdateWithoutPlayerInput, TournamentWinnerUncheckedUpdateWithoutPlayerInput>
    create: XOR<TournamentWinnerCreateWithoutPlayerInput, TournamentWinnerUncheckedCreateWithoutPlayerInput>
  }

  export type TournamentWinnerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: TournamentWinnerWhereUniqueInput
    data: XOR<TournamentWinnerUpdateWithoutPlayerInput, TournamentWinnerUncheckedUpdateWithoutPlayerInput>
  }

  export type TournamentWinnerUpdateManyWithWhereWithoutPlayerInput = {
    where: TournamentWinnerScalarWhereInput
    data: XOR<TournamentWinnerUpdateManyMutationInput, TournamentWinnerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type TournamentWinnerScalarWhereInput = {
    AND?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
    OR?: TournamentWinnerScalarWhereInput[]
    NOT?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
    id?: IntFilter<"TournamentWinner"> | number
    tournamentId?: IntFilter<"TournamentWinner"> | number
    playerId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
  }

  export type TournamentEliminationUpsertWithWhereUniqueWithoutWinnersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    update: XOR<TournamentEliminationUpdateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedUpdateWithoutWinnersBracketByePlayerInput>
    create: XOR<TournamentEliminationCreateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutWinnersBracketByePlayerInput>
  }

  export type TournamentEliminationUpdateWithWhereUniqueWithoutWinnersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    data: XOR<TournamentEliminationUpdateWithoutWinnersBracketByePlayerInput, TournamentEliminationUncheckedUpdateWithoutWinnersBracketByePlayerInput>
  }

  export type TournamentEliminationUpdateManyWithWhereWithoutWinnersBracketByePlayerInput = {
    where: TournamentEliminationScalarWhereInput
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerInput>
  }

  export type TournamentEliminationUpsertWithWhereUniqueWithoutLosersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    update: XOR<TournamentEliminationUpdateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedUpdateWithoutLosersBracketByePlayerInput>
    create: XOR<TournamentEliminationCreateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedCreateWithoutLosersBracketByePlayerInput>
  }

  export type TournamentEliminationUpdateWithWhereUniqueWithoutLosersBracketByePlayerInput = {
    where: TournamentEliminationWhereUniqueInput
    data: XOR<TournamentEliminationUpdateWithoutLosersBracketByePlayerInput, TournamentEliminationUncheckedUpdateWithoutLosersBracketByePlayerInput>
  }

  export type TournamentEliminationUpdateManyWithWhereWithoutLosersBracketByePlayerInput = {
    where: TournamentEliminationScalarWhereInput
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerInput>
  }

  export type PlayerTournamentUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTournamentWhereUniqueInput
    update: XOR<PlayerTournamentUpdateWithoutPlayerInput, PlayerTournamentUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerTournamentCreateWithoutPlayerInput, PlayerTournamentUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTournamentUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTournamentWhereUniqueInput
    data: XOR<PlayerTournamentUpdateWithoutPlayerInput, PlayerTournamentUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTournamentUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerTournamentScalarWhereInput
    data: XOR<PlayerTournamentUpdateManyMutationInput, PlayerTournamentUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerTournamentScalarWhereInput = {
    AND?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
    OR?: PlayerTournamentScalarWhereInput[]
    NOT?: PlayerTournamentScalarWhereInput | PlayerTournamentScalarWhereInput[]
    id?: IntFilter<"PlayerTournament"> | number
    playerId?: IntFilter<"PlayerTournament"> | number
    tournamentId?: IntFilter<"PlayerTournament"> | number
    wins?: IntFilter<"PlayerTournament"> | number
    losses?: IntFilter<"PlayerTournament"> | number
    createdAt?: DateTimeFilter<"PlayerTournament"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerTournament"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: IntFilter<"Match"> | number
    tournamentId?: IntFilter<"Match"> | number
    player1Id?: IntNullableFilter<"Match"> | number | null
    player2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    group?: IntNullableFilter<"Match"> | number | null
    isKnockoutMatch?: BoolFilter<"Match"> | boolean
    knockoutRound?: IntNullableFilter<"Match"> | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFilter<"Match"> | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFilter<"Match"> | boolean
    isWinnersBracketMatch?: BoolFilter<"Match"> | boolean
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type TournamentCreateWithoutPlayerTournamentInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupCreateNestedManyWithoutTournamentInput
    Match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutPlayerTournamentInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput
    Match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutPlayerTournamentInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutPlayerTournamentInput, TournamentUncheckedCreateWithoutPlayerTournamentInput>
  }

  export type PlayerCreateWithoutPlayerTournamentInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutPlayerTournamentInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutPlayerTournamentInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPlayerTournamentInput, PlayerUncheckedCreateWithoutPlayerTournamentInput>
  }

  export type TournamentUpsertWithoutPlayerTournamentInput = {
    update: XOR<TournamentUpdateWithoutPlayerTournamentInput, TournamentUncheckedUpdateWithoutPlayerTournamentInput>
    create: XOR<TournamentCreateWithoutPlayerTournamentInput, TournamentUncheckedCreateWithoutPlayerTournamentInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutPlayerTournamentInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutPlayerTournamentInput, TournamentUncheckedUpdateWithoutPlayerTournamentInput>
  }

  export type TournamentUpdateWithoutPlayerTournamentInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUpdateManyWithoutTournamentNestedInput
    Match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutPlayerTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput
    Match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type PlayerUpsertWithoutPlayerTournamentInput = {
    update: XOR<PlayerUpdateWithoutPlayerTournamentInput, PlayerUncheckedUpdateWithoutPlayerTournamentInput>
    create: XOR<PlayerCreateWithoutPlayerTournamentInput, PlayerUncheckedCreateWithoutPlayerTournamentInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPlayerTournamentInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPlayerTournamentInput, PlayerUncheckedUpdateWithoutPlayerTournamentInput>
  }

  export type PlayerUpdateWithoutPlayerTournamentInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPlayerTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TournamentWinnerCreateWithoutTournamentInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Player: PlayerCreateNestedOneWithoutTournamentWinnerInput
  }

  export type TournamentWinnerUncheckedCreateWithoutTournamentInput = {
    id?: number
    playerId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerCreateOrConnectWithoutTournamentInput = {
    where: TournamentWinnerWhereUniqueInput
    create: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentWinnerCreateManyTournamentInputEnvelope = {
    data: TournamentWinnerCreateManyTournamentInput | TournamentWinnerCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TournamentEliminationCreateWithoutTournamentInput = {
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    BronzeMatch?: MatchCreateNestedOneWithoutTournamentEliminationInput
    WinnersBracketByePlayer?: PlayerCreateNestedOneWithoutWinnersByeEliminationsInput
    LosersBracketByePlayer?: PlayerCreateNestedOneWithoutLosersByeEliminationsInput
  }

  export type TournamentEliminationUncheckedCreateWithoutTournamentInput = {
    id?: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateOrConnectWithoutTournamentInput = {
    where: TournamentEliminationWhereUniqueInput
    create: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentEliminationCreateManyTournamentInputEnvelope = {
    data: TournamentEliminationCreateManyTournamentInput | TournamentEliminationCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TournamentGroupCreateWithoutTournamentInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupUncheckedCreateWithoutTournamentInput = {
    id?: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupCreateOrConnectWithoutTournamentInput = {
    where: TournamentGroupWhereUniqueInput
    create: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentGroupCreateManyTournamentInputEnvelope = {
    data: TournamentGroupCreateManyTournamentInput | TournamentGroupCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTournamentCreateWithoutTournamentInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Player: PlayerCreateNestedOneWithoutPlayerTournamentInput
  }

  export type PlayerTournamentUncheckedCreateWithoutTournamentInput = {
    id?: number
    playerId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentCreateOrConnectWithoutTournamentInput = {
    where: PlayerTournamentWhereUniqueInput
    create: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput>
  }

  export type PlayerTournamentCreateManyTournamentInputEnvelope = {
    data: PlayerTournamentCreateManyTournamentInput | PlayerTournamentCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTournamentInput = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Player1?: PlayerCreateNestedOneWithoutMatchPlayer1Input
    Player2?: PlayerCreateNestedOneWithoutMatchPlayer2Input
    Winner?: PlayerCreateNestedOneWithoutMatchWinnerInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: number
    player1Id?: number | null
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutBronzeMatchInput
  }

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TournamentWinnerUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentWinnerWhereUniqueInput
    update: XOR<TournamentWinnerUpdateWithoutTournamentInput, TournamentWinnerUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentWinnerUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentWinnerWhereUniqueInput
    data: XOR<TournamentWinnerUpdateWithoutTournamentInput, TournamentWinnerUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentWinnerUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentWinnerScalarWhereInput
    data: XOR<TournamentWinnerUpdateManyMutationInput, TournamentWinnerUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentEliminationUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentEliminationWhereUniqueInput
    update: XOR<TournamentEliminationUpdateWithoutTournamentInput, TournamentEliminationUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentEliminationCreateWithoutTournamentInput, TournamentEliminationUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentEliminationUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentEliminationWhereUniqueInput
    data: XOR<TournamentEliminationUpdateWithoutTournamentInput, TournamentEliminationUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentEliminationUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentEliminationScalarWhereInput
    data: XOR<TournamentEliminationUpdateManyMutationInput, TournamentEliminationUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentGroupUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentGroupWhereUniqueInput
    update: XOR<TournamentGroupUpdateWithoutTournamentInput, TournamentGroupUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentGroupCreateWithoutTournamentInput, TournamentGroupUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentGroupUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentGroupWhereUniqueInput
    data: XOR<TournamentGroupUpdateWithoutTournamentInput, TournamentGroupUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentGroupUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentGroupScalarWhereInput
    data: XOR<TournamentGroupUpdateManyMutationInput, TournamentGroupUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentGroupScalarWhereInput = {
    AND?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
    OR?: TournamentGroupScalarWhereInput[]
    NOT?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
    id?: IntFilter<"TournamentGroup"> | number
    tournamentId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
  }

  export type PlayerTournamentUpsertWithWhereUniqueWithoutTournamentInput = {
    where: PlayerTournamentWhereUniqueInput
    update: XOR<PlayerTournamentUpdateWithoutTournamentInput, PlayerTournamentUncheckedUpdateWithoutTournamentInput>
    create: XOR<PlayerTournamentCreateWithoutTournamentInput, PlayerTournamentUncheckedCreateWithoutTournamentInput>
  }

  export type PlayerTournamentUpdateWithWhereUniqueWithoutTournamentInput = {
    where: PlayerTournamentWhereUniqueInput
    data: XOR<PlayerTournamentUpdateWithoutTournamentInput, PlayerTournamentUncheckedUpdateWithoutTournamentInput>
  }

  export type PlayerTournamentUpdateManyWithWhereWithoutTournamentInput = {
    where: PlayerTournamentScalarWhereInput
    data: XOR<PlayerTournamentUpdateManyMutationInput, PlayerTournamentUncheckedUpdateManyWithoutTournamentInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentCreateWithoutTournamentEliminationInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutTournamentInput
    Match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTournamentEliminationInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput
    Match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTournamentEliminationInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTournamentEliminationInput, TournamentUncheckedCreateWithoutTournamentEliminationInput>
  }

  export type MatchCreateWithoutTournamentEliminationInput = {
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Tournament: TournamentCreateNestedOneWithoutMatchInput
    Player1?: PlayerCreateNestedOneWithoutMatchPlayer1Input
    Player2?: PlayerCreateNestedOneWithoutMatchPlayer2Input
    Winner?: PlayerCreateNestedOneWithoutMatchWinnerInput
  }

  export type MatchUncheckedCreateWithoutTournamentEliminationInput = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutTournamentEliminationInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentEliminationInput, MatchUncheckedCreateWithoutTournamentEliminationInput>
  }

  export type PlayerCreateWithoutWinnersByeEliminationsInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutWinnersByeEliminationsInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutWinnersByeEliminationsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutWinnersByeEliminationsInput, PlayerUncheckedCreateWithoutWinnersByeEliminationsInput>
  }

  export type PlayerCreateWithoutLosersByeEliminationsInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutLosersByeEliminationsInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutPlayerInput
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutLosersByeEliminationsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutLosersByeEliminationsInput, PlayerUncheckedCreateWithoutLosersByeEliminationsInput>
  }

  export type TournamentUpsertWithoutTournamentEliminationInput = {
    update: XOR<TournamentUpdateWithoutTournamentEliminationInput, TournamentUncheckedUpdateWithoutTournamentEliminationInput>
    create: XOR<TournamentCreateWithoutTournamentEliminationInput, TournamentUncheckedCreateWithoutTournamentEliminationInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTournamentEliminationInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTournamentEliminationInput, TournamentUncheckedUpdateWithoutTournamentEliminationInput>
  }

  export type TournamentUpdateWithoutTournamentEliminationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutTournamentNestedInput
    Match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTournamentEliminationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    Match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type MatchUpsertWithoutTournamentEliminationInput = {
    update: XOR<MatchUpdateWithoutTournamentEliminationInput, MatchUncheckedUpdateWithoutTournamentEliminationInput>
    create: XOR<MatchCreateWithoutTournamentEliminationInput, MatchUncheckedCreateWithoutTournamentEliminationInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutTournamentEliminationInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutTournamentEliminationInput, MatchUncheckedUpdateWithoutTournamentEliminationInput>
  }

  export type MatchUpdateWithoutTournamentEliminationInput = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    Player1?: PlayerUpdateOneWithoutMatchPlayer1NestedInput
    Player2?: PlayerUpdateOneWithoutMatchPlayer2NestedInput
    Winner?: PlayerUpdateOneWithoutMatchWinnerNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentEliminationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpsertWithoutWinnersByeEliminationsInput = {
    update: XOR<PlayerUpdateWithoutWinnersByeEliminationsInput, PlayerUncheckedUpdateWithoutWinnersByeEliminationsInput>
    create: XOR<PlayerCreateWithoutWinnersByeEliminationsInput, PlayerUncheckedCreateWithoutWinnersByeEliminationsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutWinnersByeEliminationsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutWinnersByeEliminationsInput, PlayerUncheckedUpdateWithoutWinnersByeEliminationsInput>
  }

  export type PlayerUpdateWithoutWinnersByeEliminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutWinnersByeEliminationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUpsertWithoutLosersByeEliminationsInput = {
    update: XOR<PlayerUpdateWithoutLosersByeEliminationsInput, PlayerUncheckedUpdateWithoutLosersByeEliminationsInput>
    create: XOR<PlayerCreateWithoutLosersByeEliminationsInput, PlayerUncheckedCreateWithoutLosersByeEliminationsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutLosersByeEliminationsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutLosersByeEliminationsInput, PlayerUncheckedUpdateWithoutLosersByeEliminationsInput>
  }

  export type PlayerUpdateWithoutLosersByeEliminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutLosersByeEliminationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutPlayerNestedInput
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TournamentCreateWithoutTournamentGroupInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutTournamentInput
    Match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTournamentGroupInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentWinner?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput
    Match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTournamentGroupInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTournamentGroupInput, TournamentUncheckedCreateWithoutTournamentGroupInput>
  }

  export type TournamentUpsertWithoutTournamentGroupInput = {
    update: XOR<TournamentUpdateWithoutTournamentGroupInput, TournamentUncheckedUpdateWithoutTournamentGroupInput>
    create: XOR<TournamentCreateWithoutTournamentGroupInput, TournamentUncheckedCreateWithoutTournamentGroupInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTournamentGroupInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTournamentGroupInput, TournamentUncheckedUpdateWithoutTournamentGroupInput>
  }

  export type TournamentUpdateWithoutTournamentGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutTournamentNestedInput
    Match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTournamentGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentWinner?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    Match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateWithoutTournamentWinnerInput = {
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutTournamentInput
    Match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTournamentWinnerInput = {
    id?: number
    name: string
    tournamentStat?: $Enums.TournamentStat
    isFirstRoundsValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    TournamentElimination?: TournamentEliminationUncheckedCreateNestedManyWithoutTournamentInput
    TournamentGroup?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutTournamentInput
    Match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTournamentWinnerInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTournamentWinnerInput, TournamentUncheckedCreateWithoutTournamentWinnerInput>
  }

  export type PlayerCreateWithoutTournamentWinnerInput = {
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    WinnersByeEliminations?: TournamentEliminationCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type PlayerUncheckedCreateWithoutTournamentWinnerInput = {
    id?: number
    name: string
    overallWins?: number
    overallLosses?: number
    group?: number | null
    elo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    WinnersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutWinnersBracketByePlayerInput
    LosersByeEliminations?: TournamentEliminationUncheckedCreateNestedManyWithoutLosersBracketByePlayerInput
    PlayerTournament?: PlayerTournamentUncheckedCreateNestedManyWithoutPlayerInput
    MatchPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    MatchPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    MatchWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PlayerCreateOrConnectWithoutTournamentWinnerInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTournamentWinnerInput, PlayerUncheckedCreateWithoutTournamentWinnerInput>
  }

  export type TournamentUpsertWithoutTournamentWinnerInput = {
    update: XOR<TournamentUpdateWithoutTournamentWinnerInput, TournamentUncheckedUpdateWithoutTournamentWinnerInput>
    create: XOR<TournamentCreateWithoutTournamentWinnerInput, TournamentUncheckedCreateWithoutTournamentWinnerInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTournamentWinnerInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTournamentWinnerInput, TournamentUncheckedUpdateWithoutTournamentWinnerInput>
  }

  export type TournamentUpdateWithoutTournamentWinnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutTournamentNestedInput
    Match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTournamentWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tournamentStat?: EnumTournamentStatFieldUpdateOperationsInput | $Enums.TournamentStat
    isFirstRoundsValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutTournamentNestedInput
    TournamentGroup?: TournamentGroupUncheckedUpdateManyWithoutTournamentNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    Match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type PlayerUpsertWithoutTournamentWinnerInput = {
    update: XOR<PlayerUpdateWithoutTournamentWinnerInput, PlayerUncheckedUpdateWithoutTournamentWinnerInput>
    create: XOR<PlayerCreateWithoutTournamentWinnerInput, PlayerUncheckedCreateWithoutTournamentWinnerInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutTournamentWinnerInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutTournamentWinnerInput, PlayerUncheckedUpdateWithoutTournamentWinnerInput>
  }

  export type PlayerUpdateWithoutTournamentWinnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WinnersByeEliminations?: TournamentEliminationUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTournamentWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    overallWins?: IntFieldUpdateOperationsInput | number
    overallLosses?: IntFieldUpdateOperationsInput | number
    group?: NullableIntFieldUpdateOperationsInput | number | null
    elo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WinnersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerNestedInput
    LosersByeEliminations?: TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerNestedInput
    PlayerTournament?: PlayerTournamentUncheckedUpdateManyWithoutPlayerNestedInput
    MatchPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    MatchPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    MatchWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TournamentEliminationCreateManyBronzeMatchInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationUpdateWithoutBronzeMatchInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentEliminationNestedInput
    WinnersBracketByePlayer?: PlayerUpdateOneWithoutWinnersByeEliminationsNestedInput
    LosersBracketByePlayer?: PlayerUpdateOneWithoutLosersByeEliminationsNestedInput
  }

  export type TournamentEliminationUncheckedUpdateWithoutBronzeMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerCreateManyPlayerInput = {
    id?: number
    tournamentId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateManyWinnersBracketByePlayerInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateManyLosersBracketByePlayerInput = {
    id?: number
    tournamentId: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentCreateManyPlayerInput = {
    id?: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyPlayer1Input = {
    id?: number
    tournamentId: number
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyPlayer2Input = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyWinnerInput = {
    id?: number
    tournamentId: number
    player1Id?: number | null
    player2Id?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerUpdateWithoutPlayerInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentWinnerNestedInput
  }

  export type TournamentWinnerUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUpdateWithoutWinnersBracketByePlayerInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentEliminationNestedInput
    BronzeMatch?: MatchUpdateOneWithoutTournamentEliminationNestedInput
    LosersBracketByePlayer?: PlayerUpdateOneWithoutLosersByeEliminationsNestedInput
  }

  export type TournamentEliminationUncheckedUpdateWithoutWinnersBracketByePlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutWinnersBracketByePlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUpdateWithoutLosersBracketByePlayerInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutTournamentEliminationNestedInput
    BronzeMatch?: MatchUpdateOneWithoutTournamentEliminationNestedInput
    WinnersBracketByePlayer?: PlayerUpdateOneWithoutWinnersByeEliminationsNestedInput
  }

  export type TournamentEliminationUncheckedUpdateWithoutLosersBracketByePlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutLosersBracketByePlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentUpdateWithoutPlayerInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutPlayerTournamentNestedInput
  }

  export type PlayerTournamentUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer1Input = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    Player2?: PlayerUpdateOneWithoutMatchPlayer2NestedInput
    Winner?: PlayerUpdateOneWithoutMatchWinnerNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer2Input = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    Player1?: PlayerUpdateOneWithoutMatchPlayer1NestedInput
    Winner?: PlayerUpdateOneWithoutMatchWinnerNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutWinnerInput = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    Player1?: PlayerUpdateOneWithoutMatchPlayer1NestedInput
    Player2?: PlayerUpdateOneWithoutMatchPlayer2NestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerCreateManyTournamentInput = {
    id?: number
    playerId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentEliminationCreateManyTournamentInput = {
    id?: number
    currentRound?: number
    eliminationType?: $Enums.EliminationType
    bronzeMatchId?: number | null
    isLosersBracketPlayerWins?: boolean
    isEliminationsOver?: boolean
    winnersBracketByePlayerId?: number | null
    losersBracketByePlayerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupCreateManyTournamentInput = {
    id?: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerTournamentCreateManyTournamentInput = {
    id?: number
    playerId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTournamentInput = {
    id?: number
    player1Id?: number | null
    player2Id?: number | null
    winnerId?: number | null
    serialNumber?: number | null
    isOver?: boolean
    group?: number | null
    isKnockoutMatch?: boolean
    knockoutRound?: number | null
    knockoutMatchType?: $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: boolean
    isWinnersBracketMatch?: boolean
    nextMatchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerUpdateWithoutTournamentInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUpdateOneRequiredWithoutTournamentWinnerNestedInput
  }

  export type TournamentWinnerUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUpdateWithoutTournamentInput = {
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BronzeMatch?: MatchUpdateOneWithoutTournamentEliminationNestedInput
    WinnersBracketByePlayer?: PlayerUpdateOneWithoutWinnersByeEliminationsNestedInput
    LosersBracketByePlayer?: PlayerUpdateOneWithoutLosersByeEliminationsNestedInput
  }

  export type TournamentEliminationUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEliminationUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentRound?: IntFieldUpdateOperationsInput | number
    eliminationType?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    bronzeMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    isLosersBracketPlayerWins?: BoolFieldUpdateOperationsInput | boolean
    isEliminationsOver?: BoolFieldUpdateOperationsInput | boolean
    winnersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    losersBracketByePlayerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupUpdateWithoutTournamentInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentUpdateWithoutTournamentInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUpdateOneRequiredWithoutPlayerTournamentNestedInput
  }

  export type PlayerTournamentUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTournamentUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTournamentInput = {
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Player1?: PlayerUpdateOneWithoutMatchPlayer1NestedInput
    Player2?: PlayerUpdateOneWithoutMatchPlayer2NestedInput
    Winner?: PlayerUpdateOneWithoutMatchWinnerNestedInput
    TournamentElimination?: TournamentEliminationUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentElimination?: TournamentEliminationUncheckedUpdateManyWithoutBronzeMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    group?: NullableIntFieldUpdateOperationsInput | number | null
    isKnockoutMatch?: BoolFieldUpdateOperationsInput | boolean
    knockoutRound?: NullableIntFieldUpdateOperationsInput | number | null
    knockoutMatchType?: EnumKnockoutMatchTypeFieldUpdateOperationsInput | $Enums.KnockoutMatchType
    isDoubleEliminationMatch?: BoolFieldUpdateOperationsInput | boolean
    isWinnersBracketMatch?: BoolFieldUpdateOperationsInput | boolean
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}