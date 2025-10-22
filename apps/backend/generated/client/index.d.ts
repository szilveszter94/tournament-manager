
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
 * Model Elimination
 * 
 */
export type Elimination = $Result.DefaultSelection<Prisma.$EliminationPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model ParticipantGroup
 * 
 */
export type ParticipantGroup = $Result.DefaultSelection<Prisma.$ParticipantGroupPayload>
/**
 * Model ParticipantTournament
 * 
 */
export type ParticipantTournament = $Result.DefaultSelection<Prisma.$ParticipantTournamentPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentGroup
 * 
 */
export type TournamentGroup = $Result.DefaultSelection<Prisma.$TournamentGroupPayload>
/**
 * Model TournamentPhase
 * 
 */
export type TournamentPhase = $Result.DefaultSelection<Prisma.$TournamentPhasePayload>
/**
 * Model TournamentWinner
 * 
 */
export type TournamentWinner = $Result.DefaultSelection<Prisma.$TournamentWinnerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EliminationType: {
  Knockout: 'Knockout',
  Double: 'Double'
};

export type EliminationType = (typeof EliminationType)[keyof typeof EliminationType]


export const MatchType: {
  Group: 'Group',
  Knockout: 'Knockout',
  Bronze: 'Bronze',
  Final: 'Final'
};

export type MatchType = (typeof MatchType)[keyof typeof MatchType]


export const PhaseType: {
  None: 'None',
  GroupStage: 'GroupStage',
  SingleElimination: 'SingleElimination',
  DoubleElimination: 'DoubleElimination',
  RoundRobin: 'RoundRobin',
  Swiss: 'Swiss'
};

export type PhaseType = (typeof PhaseType)[keyof typeof PhaseType]


export const ParticipantType: {
  Individual: 'Individual',
  Team: 'Team'
};

export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType]


export const TournamentStatus: {
  RegisterPlayers: 'RegisterPlayers',
  CreateFirstRound: 'CreateFirstRound',
  FirstRoundStarted: 'FirstRoundStarted',
  CreateSecondRound: 'CreateSecondRound',
  SecondRoundStarted: 'SecondRoundStarted',
  Over: 'Over'
};

export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus]

}

export type EliminationType = $Enums.EliminationType

export const EliminationType: typeof $Enums.EliminationType

export type MatchType = $Enums.MatchType

export const MatchType: typeof $Enums.MatchType

export type PhaseType = $Enums.PhaseType

export const PhaseType: typeof $Enums.PhaseType

export type ParticipantType = $Enums.ParticipantType

export const ParticipantType: typeof $Enums.ParticipantType

export type TournamentStatus = $Enums.TournamentStatus

export const TournamentStatus: typeof $Enums.TournamentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eliminations
 * const eliminations = await prisma.elimination.findMany()
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
   * // Fetch zero or more Eliminations
   * const eliminations = await prisma.elimination.findMany()
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
   * `prisma.elimination`: Exposes CRUD operations for the **Elimination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eliminations
    * const eliminations = await prisma.elimination.findMany()
    * ```
    */
  get elimination(): Prisma.EliminationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantGroup`: Exposes CRUD operations for the **ParticipantGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantGroups
    * const participantGroups = await prisma.participantGroup.findMany()
    * ```
    */
  get participantGroup(): Prisma.ParticipantGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantTournament`: Exposes CRUD operations for the **ParticipantTournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantTournaments
    * const participantTournaments = await prisma.participantTournament.findMany()
    * ```
    */
  get participantTournament(): Prisma.ParticipantTournamentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.tournamentGroup`: Exposes CRUD operations for the **TournamentGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentGroups
    * const tournamentGroups = await prisma.tournamentGroup.findMany()
    * ```
    */
  get tournamentGroup(): Prisma.TournamentGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentPhase`: Exposes CRUD operations for the **TournamentPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentPhases
    * const tournamentPhases = await prisma.tournamentPhase.findMany()
    * ```
    */
  get tournamentPhase(): Prisma.TournamentPhaseDelegate<ExtArgs, ClientOptions>;

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
    Elimination: 'Elimination',
    Match: 'Match',
    Participant: 'Participant',
    ParticipantGroup: 'ParticipantGroup',
    ParticipantTournament: 'ParticipantTournament',
    Tournament: 'Tournament',
    TournamentGroup: 'TournamentGroup',
    TournamentPhase: 'TournamentPhase',
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
      modelProps: "elimination" | "match" | "participant" | "participantGroup" | "participantTournament" | "tournament" | "tournamentGroup" | "tournamentPhase" | "tournamentWinner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Elimination: {
        payload: Prisma.$EliminationPayload<ExtArgs>
        fields: Prisma.EliminationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EliminationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EliminationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          findFirst: {
            args: Prisma.EliminationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EliminationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          findMany: {
            args: Prisma.EliminationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>[]
          }
          create: {
            args: Prisma.EliminationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          createMany: {
            args: Prisma.EliminationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EliminationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>[]
          }
          delete: {
            args: Prisma.EliminationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          update: {
            args: Prisma.EliminationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          deleteMany: {
            args: Prisma.EliminationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EliminationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EliminationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>[]
          }
          upsert: {
            args: Prisma.EliminationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EliminationPayload>
          }
          aggregate: {
            args: Prisma.EliminationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElimination>
          }
          groupBy: {
            args: Prisma.EliminationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EliminationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EliminationCountArgs<ExtArgs>
            result: $Utils.Optional<EliminationCountAggregateOutputType> | number
          }
        }
      }
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
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      ParticipantGroup: {
        payload: Prisma.$ParticipantGroupPayload<ExtArgs>
        fields: Prisma.ParticipantGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          findFirst: {
            args: Prisma.ParticipantGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          findMany: {
            args: Prisma.ParticipantGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>[]
          }
          create: {
            args: Prisma.ParticipantGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          createMany: {
            args: Prisma.ParticipantGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>[]
          }
          delete: {
            args: Prisma.ParticipantGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          update: {
            args: Prisma.ParticipantGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantGroupPayload>
          }
          aggregate: {
            args: Prisma.ParticipantGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantGroup>
          }
          groupBy: {
            args: Prisma.ParticipantGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupCountAggregateOutputType> | number
          }
        }
      }
      ParticipantTournament: {
        payload: Prisma.$ParticipantTournamentPayload<ExtArgs>
        fields: Prisma.ParticipantTournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantTournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantTournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          findFirst: {
            args: Prisma.ParticipantTournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantTournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          findMany: {
            args: Prisma.ParticipantTournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>[]
          }
          create: {
            args: Prisma.ParticipantTournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          createMany: {
            args: Prisma.ParticipantTournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantTournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>[]
          }
          delete: {
            args: Prisma.ParticipantTournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          update: {
            args: Prisma.ParticipantTournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantTournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantTournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantTournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantTournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantTournamentPayload>
          }
          aggregate: {
            args: Prisma.ParticipantTournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantTournament>
          }
          groupBy: {
            args: Prisma.ParticipantTournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantTournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantTournamentCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantTournamentCountAggregateOutputType> | number
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
      TournamentPhase: {
        payload: Prisma.$TournamentPhasePayload<ExtArgs>
        fields: Prisma.TournamentPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          findFirst: {
            args: Prisma.TournamentPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          findMany: {
            args: Prisma.TournamentPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>[]
          }
          create: {
            args: Prisma.TournamentPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          createMany: {
            args: Prisma.TournamentPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>[]
          }
          delete: {
            args: Prisma.TournamentPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          update: {
            args: Prisma.TournamentPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          deleteMany: {
            args: Prisma.TournamentPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>[]
          }
          upsert: {
            args: Prisma.TournamentPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPhasePayload>
          }
          aggregate: {
            args: Prisma.TournamentPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentPhase>
          }
          groupBy: {
            args: Prisma.TournamentPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentPhaseCountAggregateOutputType> | number
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
    elimination?: EliminationOmit
    match?: MatchOmit
    participant?: ParticipantOmit
    participantGroup?: ParticipantGroupOmit
    participantTournament?: ParticipantTournamentOmit
    tournament?: TournamentOmit
    tournamentGroup?: TournamentGroupOmit
    tournamentPhase?: TournamentPhaseOmit
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
   * Count Type EliminationCountOutputType
   */

  export type EliminationCountOutputType = {
    matches: number
  }

  export type EliminationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | EliminationCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * EliminationCountOutputType without action
   */
  export type EliminationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EliminationCountOutputType
     */
    select?: EliminationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EliminationCountOutputType without action
   */
  export type EliminationCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    prevMatches: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prevMatches?: boolean | MatchCountOutputTypeCountPrevMatchesArgs
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
  export type MatchCountOutputTypeCountPrevMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    tournaments: number
    groups: number
    matchesAsP1: number
    matchesAsP2: number
    matchesWon: number
    podiums: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournaments?: boolean | ParticipantCountOutputTypeCountTournamentsArgs
    groups?: boolean | ParticipantCountOutputTypeCountGroupsArgs
    matchesAsP1?: boolean | ParticipantCountOutputTypeCountMatchesAsP1Args
    matchesAsP2?: boolean | ParticipantCountOutputTypeCountMatchesAsP2Args
    matchesWon?: boolean | ParticipantCountOutputTypeCountMatchesWonArgs
    podiums?: boolean | ParticipantCountOutputTypeCountPodiumsArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountTournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantTournamentWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantGroupWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountMatchesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountMatchesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountMatchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountPodiumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWinnerWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    phases: number
    participants: number
    winners: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | TournamentCountOutputTypeCountPhasesArgs
    participants?: boolean | TournamentCountOutputTypeCountParticipantsArgs
    winners?: boolean | TournamentCountOutputTypeCountWinnersArgs
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
  export type TournamentCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentPhaseWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantTournamentWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWinnerWhereInput
  }


  /**
   * Count Type TournamentGroupCountOutputType
   */

  export type TournamentGroupCountOutputType = {
    participantGroups: number
    matches: number
  }

  export type TournamentGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantGroups?: boolean | TournamentGroupCountOutputTypeCountParticipantGroupsArgs
    matches?: boolean | TournamentGroupCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TournamentGroupCountOutputType without action
   */
  export type TournamentGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentGroupCountOutputType
     */
    select?: TournamentGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentGroupCountOutputType without action
   */
  export type TournamentGroupCountOutputTypeCountParticipantGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantGroupWhereInput
  }

  /**
   * TournamentGroupCountOutputType without action
   */
  export type TournamentGroupCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type TournamentPhaseCountOutputType
   */

  export type TournamentPhaseCountOutputType = {
    groups: number
    matches: number
  }

  export type TournamentPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | TournamentPhaseCountOutputTypeCountGroupsArgs
    matches?: boolean | TournamentPhaseCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TournamentPhaseCountOutputType without action
   */
  export type TournamentPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhaseCountOutputType
     */
    select?: TournamentPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentPhaseCountOutputType without action
   */
  export type TournamentPhaseCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentGroupWhereInput
  }

  /**
   * TournamentPhaseCountOutputType without action
   */
  export type TournamentPhaseCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Elimination
   */

  export type AggregateElimination = {
    _count: EliminationCountAggregateOutputType | null
    _avg: EliminationAvgAggregateOutputType | null
    _sum: EliminationSumAggregateOutputType | null
    _min: EliminationMinAggregateOutputType | null
    _max: EliminationMaxAggregateOutputType | null
  }

  export type EliminationAvgAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    currentRound: number | null
  }

  export type EliminationSumAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    currentRound: number | null
  }

  export type EliminationMinAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    type: $Enums.EliminationType | null
    currentRound: number | null
    isOver: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EliminationMaxAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    type: $Enums.EliminationType | null
    currentRound: number | null
    isOver: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EliminationCountAggregateOutputType = {
    id: number
    tournamentPhaseId: number
    type: number
    currentRound: number
    isOver: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EliminationAvgAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    currentRound?: true
  }

  export type EliminationSumAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    currentRound?: true
  }

  export type EliminationMinAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    type?: true
    currentRound?: true
    isOver?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EliminationMaxAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    type?: true
    currentRound?: true
    isOver?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EliminationCountAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    type?: true
    currentRound?: true
    isOver?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EliminationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elimination to aggregate.
     */
    where?: EliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eliminations to fetch.
     */
    orderBy?: EliminationOrderByWithRelationInput | EliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eliminations
    **/
    _count?: true | EliminationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EliminationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EliminationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EliminationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EliminationMaxAggregateInputType
  }

  export type GetEliminationAggregateType<T extends EliminationAggregateArgs> = {
        [P in keyof T & keyof AggregateElimination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElimination[P]>
      : GetScalarType<T[P], AggregateElimination[P]>
  }




  export type EliminationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EliminationWhereInput
    orderBy?: EliminationOrderByWithAggregationInput | EliminationOrderByWithAggregationInput[]
    by: EliminationScalarFieldEnum[] | EliminationScalarFieldEnum
    having?: EliminationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EliminationCountAggregateInputType | true
    _avg?: EliminationAvgAggregateInputType
    _sum?: EliminationSumAggregateInputType
    _min?: EliminationMinAggregateInputType
    _max?: EliminationMaxAggregateInputType
  }

  export type EliminationGroupByOutputType = {
    id: number
    tournamentPhaseId: number
    type: $Enums.EliminationType
    currentRound: number
    isOver: boolean
    createdAt: Date
    updatedAt: Date
    _count: EliminationCountAggregateOutputType | null
    _avg: EliminationAvgAggregateOutputType | null
    _sum: EliminationSumAggregateOutputType | null
    _min: EliminationMinAggregateOutputType | null
    _max: EliminationMaxAggregateOutputType | null
  }

  type GetEliminationGroupByPayload<T extends EliminationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EliminationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EliminationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EliminationGroupByOutputType[P]>
            : GetScalarType<T[P], EliminationGroupByOutputType[P]>
        }
      >
    >


  export type EliminationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    type?: boolean
    currentRound?: boolean
    isOver?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    matches?: boolean | Elimination$matchesArgs<ExtArgs>
    _count?: boolean | EliminationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elimination"]>

  export type EliminationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    type?: boolean
    currentRound?: boolean
    isOver?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elimination"]>

  export type EliminationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    type?: boolean
    currentRound?: boolean
    isOver?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elimination"]>

  export type EliminationSelectScalar = {
    id?: boolean
    tournamentPhaseId?: boolean
    type?: boolean
    currentRound?: boolean
    isOver?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EliminationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentPhaseId" | "type" | "currentRound" | "isOver" | "createdAt" | "updatedAt", ExtArgs["result"]["elimination"]>
  export type EliminationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    matches?: boolean | Elimination$matchesArgs<ExtArgs>
    _count?: boolean | EliminationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EliminationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }
  export type EliminationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }

  export type $EliminationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Elimination"
    objects: {
      tournamentPhase: Prisma.$TournamentPhasePayload<ExtArgs>
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentPhaseId: number
      type: $Enums.EliminationType
      currentRound: number
      isOver: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["elimination"]>
    composites: {}
  }

  type EliminationGetPayload<S extends boolean | null | undefined | EliminationDefaultArgs> = $Result.GetResult<Prisma.$EliminationPayload, S>

  type EliminationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EliminationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EliminationCountAggregateInputType | true
    }

  export interface EliminationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Elimination'], meta: { name: 'Elimination' } }
    /**
     * Find zero or one Elimination that matches the filter.
     * @param {EliminationFindUniqueArgs} args - Arguments to find a Elimination
     * @example
     * // Get one Elimination
     * const elimination = await prisma.elimination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EliminationFindUniqueArgs>(args: SelectSubset<T, EliminationFindUniqueArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elimination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EliminationFindUniqueOrThrowArgs} args - Arguments to find a Elimination
     * @example
     * // Get one Elimination
     * const elimination = await prisma.elimination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EliminationFindUniqueOrThrowArgs>(args: SelectSubset<T, EliminationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elimination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationFindFirstArgs} args - Arguments to find a Elimination
     * @example
     * // Get one Elimination
     * const elimination = await prisma.elimination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EliminationFindFirstArgs>(args?: SelectSubset<T, EliminationFindFirstArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elimination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationFindFirstOrThrowArgs} args - Arguments to find a Elimination
     * @example
     * // Get one Elimination
     * const elimination = await prisma.elimination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EliminationFindFirstOrThrowArgs>(args?: SelectSubset<T, EliminationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eliminations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eliminations
     * const eliminations = await prisma.elimination.findMany()
     * 
     * // Get first 10 Eliminations
     * const eliminations = await prisma.elimination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eliminationWithIdOnly = await prisma.elimination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EliminationFindManyArgs>(args?: SelectSubset<T, EliminationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elimination.
     * @param {EliminationCreateArgs} args - Arguments to create a Elimination.
     * @example
     * // Create one Elimination
     * const Elimination = await prisma.elimination.create({
     *   data: {
     *     // ... data to create a Elimination
     *   }
     * })
     * 
     */
    create<T extends EliminationCreateArgs>(args: SelectSubset<T, EliminationCreateArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eliminations.
     * @param {EliminationCreateManyArgs} args - Arguments to create many Eliminations.
     * @example
     * // Create many Eliminations
     * const elimination = await prisma.elimination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EliminationCreateManyArgs>(args?: SelectSubset<T, EliminationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eliminations and returns the data saved in the database.
     * @param {EliminationCreateManyAndReturnArgs} args - Arguments to create many Eliminations.
     * @example
     * // Create many Eliminations
     * const elimination = await prisma.elimination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eliminations and only return the `id`
     * const eliminationWithIdOnly = await prisma.elimination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EliminationCreateManyAndReturnArgs>(args?: SelectSubset<T, EliminationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Elimination.
     * @param {EliminationDeleteArgs} args - Arguments to delete one Elimination.
     * @example
     * // Delete one Elimination
     * const Elimination = await prisma.elimination.delete({
     *   where: {
     *     // ... filter to delete one Elimination
     *   }
     * })
     * 
     */
    delete<T extends EliminationDeleteArgs>(args: SelectSubset<T, EliminationDeleteArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elimination.
     * @param {EliminationUpdateArgs} args - Arguments to update one Elimination.
     * @example
     * // Update one Elimination
     * const elimination = await prisma.elimination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EliminationUpdateArgs>(args: SelectSubset<T, EliminationUpdateArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eliminations.
     * @param {EliminationDeleteManyArgs} args - Arguments to filter Eliminations to delete.
     * @example
     * // Delete a few Eliminations
     * const { count } = await prisma.elimination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EliminationDeleteManyArgs>(args?: SelectSubset<T, EliminationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eliminations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eliminations
     * const elimination = await prisma.elimination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EliminationUpdateManyArgs>(args: SelectSubset<T, EliminationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eliminations and returns the data updated in the database.
     * @param {EliminationUpdateManyAndReturnArgs} args - Arguments to update many Eliminations.
     * @example
     * // Update many Eliminations
     * const elimination = await prisma.elimination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eliminations and only return the `id`
     * const eliminationWithIdOnly = await prisma.elimination.updateManyAndReturn({
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
    updateManyAndReturn<T extends EliminationUpdateManyAndReturnArgs>(args: SelectSubset<T, EliminationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Elimination.
     * @param {EliminationUpsertArgs} args - Arguments to update or create a Elimination.
     * @example
     * // Update or create a Elimination
     * const elimination = await prisma.elimination.upsert({
     *   create: {
     *     // ... data to create a Elimination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elimination we want to update
     *   }
     * })
     */
    upsert<T extends EliminationUpsertArgs>(args: SelectSubset<T, EliminationUpsertArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eliminations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationCountArgs} args - Arguments to filter Eliminations to count.
     * @example
     * // Count the number of Eliminations
     * const count = await prisma.elimination.count({
     *   where: {
     *     // ... the filter for the Eliminations we want to count
     *   }
     * })
    **/
    count<T extends EliminationCountArgs>(
      args?: Subset<T, EliminationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EliminationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elimination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EliminationAggregateArgs>(args: Subset<T, EliminationAggregateArgs>): Prisma.PrismaPromise<GetEliminationAggregateType<T>>

    /**
     * Group by Elimination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EliminationGroupByArgs} args - Group by arguments.
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
      T extends EliminationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EliminationGroupByArgs['orderBy'] }
        : { orderBy?: EliminationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EliminationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEliminationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Elimination model
   */
  readonly fields: EliminationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Elimination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EliminationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournamentPhase<T extends TournamentPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhaseDefaultArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matches<T extends Elimination$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Elimination$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Elimination model
   */
  interface EliminationFieldRefs {
    readonly id: FieldRef<"Elimination", 'Int'>
    readonly tournamentPhaseId: FieldRef<"Elimination", 'Int'>
    readonly type: FieldRef<"Elimination", 'EliminationType'>
    readonly currentRound: FieldRef<"Elimination", 'Int'>
    readonly isOver: FieldRef<"Elimination", 'Boolean'>
    readonly createdAt: FieldRef<"Elimination", 'DateTime'>
    readonly updatedAt: FieldRef<"Elimination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Elimination findUnique
   */
  export type EliminationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter, which Elimination to fetch.
     */
    where: EliminationWhereUniqueInput
  }

  /**
   * Elimination findUniqueOrThrow
   */
  export type EliminationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter, which Elimination to fetch.
     */
    where: EliminationWhereUniqueInput
  }

  /**
   * Elimination findFirst
   */
  export type EliminationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter, which Elimination to fetch.
     */
    where?: EliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eliminations to fetch.
     */
    orderBy?: EliminationOrderByWithRelationInput | EliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eliminations.
     */
    cursor?: EliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eliminations.
     */
    distinct?: EliminationScalarFieldEnum | EliminationScalarFieldEnum[]
  }

  /**
   * Elimination findFirstOrThrow
   */
  export type EliminationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter, which Elimination to fetch.
     */
    where?: EliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eliminations to fetch.
     */
    orderBy?: EliminationOrderByWithRelationInput | EliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eliminations.
     */
    cursor?: EliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eliminations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eliminations.
     */
    distinct?: EliminationScalarFieldEnum | EliminationScalarFieldEnum[]
  }

  /**
   * Elimination findMany
   */
  export type EliminationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter, which Eliminations to fetch.
     */
    where?: EliminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eliminations to fetch.
     */
    orderBy?: EliminationOrderByWithRelationInput | EliminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eliminations.
     */
    cursor?: EliminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eliminations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eliminations.
     */
    skip?: number
    distinct?: EliminationScalarFieldEnum | EliminationScalarFieldEnum[]
  }

  /**
   * Elimination create
   */
  export type EliminationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * The data needed to create a Elimination.
     */
    data: XOR<EliminationCreateInput, EliminationUncheckedCreateInput>
  }

  /**
   * Elimination createMany
   */
  export type EliminationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eliminations.
     */
    data: EliminationCreateManyInput | EliminationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Elimination createManyAndReturn
   */
  export type EliminationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * The data used to create many Eliminations.
     */
    data: EliminationCreateManyInput | EliminationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Elimination update
   */
  export type EliminationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * The data needed to update a Elimination.
     */
    data: XOR<EliminationUpdateInput, EliminationUncheckedUpdateInput>
    /**
     * Choose, which Elimination to update.
     */
    where: EliminationWhereUniqueInput
  }

  /**
   * Elimination updateMany
   */
  export type EliminationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eliminations.
     */
    data: XOR<EliminationUpdateManyMutationInput, EliminationUncheckedUpdateManyInput>
    /**
     * Filter which Eliminations to update
     */
    where?: EliminationWhereInput
    /**
     * Limit how many Eliminations to update.
     */
    limit?: number
  }

  /**
   * Elimination updateManyAndReturn
   */
  export type EliminationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * The data used to update Eliminations.
     */
    data: XOR<EliminationUpdateManyMutationInput, EliminationUncheckedUpdateManyInput>
    /**
     * Filter which Eliminations to update
     */
    where?: EliminationWhereInput
    /**
     * Limit how many Eliminations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Elimination upsert
   */
  export type EliminationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * The filter to search for the Elimination to update in case it exists.
     */
    where: EliminationWhereUniqueInput
    /**
     * In case the Elimination found by the `where` argument doesn't exist, create a new Elimination with this data.
     */
    create: XOR<EliminationCreateInput, EliminationUncheckedCreateInput>
    /**
     * In case the Elimination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EliminationUpdateInput, EliminationUncheckedUpdateInput>
  }

  /**
   * Elimination delete
   */
  export type EliminationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    /**
     * Filter which Elimination to delete.
     */
    where: EliminationWhereUniqueInput
  }

  /**
   * Elimination deleteMany
   */
  export type EliminationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eliminations to delete
     */
    where?: EliminationWhereInput
    /**
     * Limit how many Eliminations to delete.
     */
    limit?: number
  }

  /**
   * Elimination.matches
   */
  export type Elimination$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Elimination without action
   */
  export type EliminationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
  }


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
    tournamentPhaseId: number | null
    eliminationId: number | null
    tournamentGroupId: number | null
    participant1Id: number | null
    participant2Id: number | null
    winnerId: number | null
    nextMatchId: number | null
    round: number | null
    serialNumber: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    eliminationId: number | null
    tournamentGroupId: number | null
    participant1Id: number | null
    participant2Id: number | null
    winnerId: number | null
    nextMatchId: number | null
    round: number | null
    serialNumber: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    eliminationId: number | null
    tournamentGroupId: number | null
    participant1Id: number | null
    participant2Id: number | null
    winnerId: number | null
    nextMatchId: number | null
    round: number | null
    serialNumber: number | null
    isOver: boolean | null
    matchType: $Enums.MatchType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    eliminationId: number | null
    tournamentGroupId: number | null
    participant1Id: number | null
    participant2Id: number | null
    winnerId: number | null
    nextMatchId: number | null
    round: number | null
    serialNumber: number | null
    isOver: boolean | null
    matchType: $Enums.MatchType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    tournamentPhaseId: number
    eliminationId: number
    tournamentGroupId: number
    participant1Id: number
    participant2Id: number
    winnerId: number
    nextMatchId: number
    round: number
    serialNumber: number
    isOver: number
    matchType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    eliminationId?: true
    tournamentGroupId?: true
    participant1Id?: true
    participant2Id?: true
    winnerId?: true
    nextMatchId?: true
    round?: true
    serialNumber?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    eliminationId?: true
    tournamentGroupId?: true
    participant1Id?: true
    participant2Id?: true
    winnerId?: true
    nextMatchId?: true
    round?: true
    serialNumber?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    eliminationId?: true
    tournamentGroupId?: true
    participant1Id?: true
    participant2Id?: true
    winnerId?: true
    nextMatchId?: true
    round?: true
    serialNumber?: true
    isOver?: true
    matchType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    eliminationId?: true
    tournamentGroupId?: true
    participant1Id?: true
    participant2Id?: true
    winnerId?: true
    nextMatchId?: true
    round?: true
    serialNumber?: true
    isOver?: true
    matchType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    eliminationId?: true
    tournamentGroupId?: true
    participant1Id?: true
    participant2Id?: true
    winnerId?: true
    nextMatchId?: true
    round?: true
    serialNumber?: true
    isOver?: true
    matchType?: true
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
    tournamentPhaseId: number
    eliminationId: number | null
    tournamentGroupId: number | null
    participant1Id: number | null
    participant2Id: number | null
    winnerId: number | null
    nextMatchId: number | null
    round: number | null
    serialNumber: number | null
    isOver: boolean
    matchType: $Enums.MatchType
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
    tournamentPhaseId?: boolean
    eliminationId?: boolean
    tournamentGroupId?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    round?: boolean
    serialNumber?: boolean
    isOver?: boolean
    matchType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
    prevMatches?: boolean | Match$prevMatchesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    eliminationId?: boolean
    tournamentGroupId?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    round?: boolean
    serialNumber?: boolean
    isOver?: boolean
    matchType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    eliminationId?: boolean
    tournamentGroupId?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    round?: boolean
    serialNumber?: boolean
    isOver?: boolean
    matchType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    tournamentPhaseId?: boolean
    eliminationId?: boolean
    tournamentGroupId?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    round?: boolean
    serialNumber?: boolean
    isOver?: boolean
    matchType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentPhaseId" | "eliminationId" | "tournamentGroupId" | "participant1Id" | "participant2Id" | "winnerId" | "nextMatchId" | "round" | "serialNumber" | "isOver" | "matchType" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
    prevMatches?: boolean | Match$prevMatchesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    elimination?: boolean | Match$eliminationArgs<ExtArgs>
    group?: boolean | Match$groupArgs<ExtArgs>
    participant1?: boolean | Match$participant1Args<ExtArgs>
    participant2?: boolean | Match$participant2Args<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      tournamentPhase: Prisma.$TournamentPhasePayload<ExtArgs>
      elimination: Prisma.$EliminationPayload<ExtArgs> | null
      group: Prisma.$TournamentGroupPayload<ExtArgs> | null
      participant1: Prisma.$ParticipantPayload<ExtArgs> | null
      participant2: Prisma.$ParticipantPayload<ExtArgs> | null
      winner: Prisma.$ParticipantPayload<ExtArgs> | null
      nextMatch: Prisma.$MatchPayload<ExtArgs> | null
      prevMatches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentPhaseId: number
      eliminationId: number | null
      tournamentGroupId: number | null
      participant1Id: number | null
      participant2Id: number | null
      winnerId: number | null
      nextMatchId: number | null
      round: number | null
      serialNumber: number | null
      isOver: boolean
      matchType: $Enums.MatchType
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
    tournamentPhase<T extends TournamentPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhaseDefaultArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    elimination<T extends Match$eliminationArgs<ExtArgs> = {}>(args?: Subset<T, Match$eliminationArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends Match$groupArgs<ExtArgs> = {}>(args?: Subset<T, Match$groupArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participant1<T extends Match$participant1Args<ExtArgs> = {}>(args?: Subset<T, Match$participant1Args<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participant2<T extends Match$participant2Args<ExtArgs> = {}>(args?: Subset<T, Match$participant2Args<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends Match$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nextMatch<T extends Match$nextMatchArgs<ExtArgs> = {}>(args?: Subset<T, Match$nextMatchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prevMatches<T extends Match$prevMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Match$prevMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tournamentPhaseId: FieldRef<"Match", 'Int'>
    readonly eliminationId: FieldRef<"Match", 'Int'>
    readonly tournamentGroupId: FieldRef<"Match", 'Int'>
    readonly participant1Id: FieldRef<"Match", 'Int'>
    readonly participant2Id: FieldRef<"Match", 'Int'>
    readonly winnerId: FieldRef<"Match", 'Int'>
    readonly nextMatchId: FieldRef<"Match", 'Int'>
    readonly round: FieldRef<"Match", 'Int'>
    readonly serialNumber: FieldRef<"Match", 'Int'>
    readonly isOver: FieldRef<"Match", 'Boolean'>
    readonly matchType: FieldRef<"Match", 'MatchType'>
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
   * Match.elimination
   */
  export type Match$eliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    where?: EliminationWhereInput
  }

  /**
   * Match.group
   */
  export type Match$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Match.participant1
   */
  export type Match$participant1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
  }

  /**
   * Match.participant2
   */
  export type Match$participant2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
  }

  /**
   * Match.winner
   */
  export type Match$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
  }

  /**
   * Match.nextMatch
   */
  export type Match$nextMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Match.prevMatches
   */
  export type Match$prevMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantAvgAggregateOutputType = {
    id: number | null
    elo: number | null
    wins: number | null
    losses: number | null
  }

  export type ParticipantSumAggregateOutputType = {
    id: number | null
    elo: number | null
    wins: number | null
    losses: number | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ParticipantType | null
    elo: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ParticipantType | null
    elo: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    name: number
    type: number
    elo: number
    wins: number
    losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantAvgAggregateInputType = {
    id?: true
    elo?: true
    wins?: true
    losses?: true
  }

  export type ParticipantSumAggregateInputType = {
    id?: true
    elo?: true
    wins?: true
    losses?: true
  }

  export type ParticipantMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    elo?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    elo?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    elo?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _avg?: ParticipantAvgAggregateInputType
    _sum?: ParticipantSumAggregateInputType
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ParticipantType
    elo: number
    wins: number
    losses: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    elo?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournaments?: boolean | Participant$tournamentsArgs<ExtArgs>
    groups?: boolean | Participant$groupsArgs<ExtArgs>
    matchesAsP1?: boolean | Participant$matchesAsP1Args<ExtArgs>
    matchesAsP2?: boolean | Participant$matchesAsP2Args<ExtArgs>
    matchesWon?: boolean | Participant$matchesWonArgs<ExtArgs>
    podiums?: boolean | Participant$podiumsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    elo?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    elo?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    elo?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "elo" | "wins" | "losses" | "createdAt" | "updatedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournaments?: boolean | Participant$tournamentsArgs<ExtArgs>
    groups?: boolean | Participant$groupsArgs<ExtArgs>
    matchesAsP1?: boolean | Participant$matchesAsP1Args<ExtArgs>
    matchesAsP2?: boolean | Participant$matchesAsP2Args<ExtArgs>
    matchesWon?: boolean | Participant$matchesWonArgs<ExtArgs>
    podiums?: boolean | Participant$podiumsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      tournaments: Prisma.$ParticipantTournamentPayload<ExtArgs>[]
      groups: Prisma.$ParticipantGroupPayload<ExtArgs>[]
      matchesAsP1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsP2: Prisma.$MatchPayload<ExtArgs>[]
      matchesWon: Prisma.$MatchPayload<ExtArgs>[]
      podiums: Prisma.$TournamentWinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ParticipantType
      elo: number
      wins: number
      losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournaments<T extends Participant$tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Participant$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsP1<T extends Participant$matchesAsP1Args<ExtArgs> = {}>(args?: Subset<T, Participant$matchesAsP1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsP2<T extends Participant$matchesAsP2Args<ExtArgs> = {}>(args?: Subset<T, Participant$matchesAsP2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesWon<T extends Participant$matchesWonArgs<ExtArgs> = {}>(args?: Subset<T, Participant$matchesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    podiums<T extends Participant$podiumsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$podiumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'Int'>
    readonly name: FieldRef<"Participant", 'String'>
    readonly type: FieldRef<"Participant", 'ParticipantType'>
    readonly elo: FieldRef<"Participant", 'Int'>
    readonly wins: FieldRef<"Participant", 'Int'>
    readonly losses: FieldRef<"Participant", 'Int'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
    readonly updatedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.tournaments
   */
  export type Participant$tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    where?: ParticipantTournamentWhereInput
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    cursor?: ParticipantTournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantTournamentScalarFieldEnum | ParticipantTournamentScalarFieldEnum[]
  }

  /**
   * Participant.groups
   */
  export type Participant$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    where?: ParticipantGroupWhereInput
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    cursor?: ParticipantGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantGroupScalarFieldEnum | ParticipantGroupScalarFieldEnum[]
  }

  /**
   * Participant.matchesAsP1
   */
  export type Participant$matchesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Participant.matchesAsP2
   */
  export type Participant$matchesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Participant.matchesWon
   */
  export type Participant$matchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Participant.podiums
   */
  export type Participant$podiumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantGroup
   */

  export type AggregateParticipantGroup = {
    _count: ParticipantGroupCountAggregateOutputType | null
    _avg: ParticipantGroupAvgAggregateOutputType | null
    _sum: ParticipantGroupSumAggregateOutputType | null
    _min: ParticipantGroupMinAggregateOutputType | null
    _max: ParticipantGroupMaxAggregateOutputType | null
  }

  export type ParticipantGroupAvgAggregateOutputType = {
    id: number | null
    tournamentGroupId: number | null
    participantId: number | null
    wins: number | null
    losses: number | null
    points: number | null
  }

  export type ParticipantGroupSumAggregateOutputType = {
    id: number | null
    tournamentGroupId: number | null
    participantId: number | null
    wins: number | null
    losses: number | null
    points: number | null
  }

  export type ParticipantGroupMinAggregateOutputType = {
    id: number | null
    tournamentGroupId: number | null
    participantId: number | null
    wins: number | null
    losses: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantGroupMaxAggregateOutputType = {
    id: number | null
    tournamentGroupId: number | null
    participantId: number | null
    wins: number | null
    losses: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantGroupCountAggregateOutputType = {
    id: number
    tournamentGroupId: number
    participantId: number
    wins: number
    losses: number
    points: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantGroupAvgAggregateInputType = {
    id?: true
    tournamentGroupId?: true
    participantId?: true
    wins?: true
    losses?: true
    points?: true
  }

  export type ParticipantGroupSumAggregateInputType = {
    id?: true
    tournamentGroupId?: true
    participantId?: true
    wins?: true
    losses?: true
    points?: true
  }

  export type ParticipantGroupMinAggregateInputType = {
    id?: true
    tournamentGroupId?: true
    participantId?: true
    wins?: true
    losses?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantGroupMaxAggregateInputType = {
    id?: true
    tournamentGroupId?: true
    participantId?: true
    wins?: true
    losses?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantGroupCountAggregateInputType = {
    id?: true
    tournamentGroupId?: true
    participantId?: true
    wins?: true
    losses?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantGroup to aggregate.
     */
    where?: ParticipantGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantGroups to fetch.
     */
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantGroups
    **/
    _count?: true | ParticipantGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantGroupMaxAggregateInputType
  }

  export type GetParticipantGroupAggregateType<T extends ParticipantGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantGroup[P]>
      : GetScalarType<T[P], AggregateParticipantGroup[P]>
  }




  export type ParticipantGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantGroupWhereInput
    orderBy?: ParticipantGroupOrderByWithAggregationInput | ParticipantGroupOrderByWithAggregationInput[]
    by: ParticipantGroupScalarFieldEnum[] | ParticipantGroupScalarFieldEnum
    having?: ParticipantGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantGroupCountAggregateInputType | true
    _avg?: ParticipantGroupAvgAggregateInputType
    _sum?: ParticipantGroupSumAggregateInputType
    _min?: ParticipantGroupMinAggregateInputType
    _max?: ParticipantGroupMaxAggregateInputType
  }

  export type ParticipantGroupGroupByOutputType = {
    id: number
    tournamentGroupId: number
    participantId: number
    wins: number
    losses: number
    points: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipantGroupCountAggregateOutputType | null
    _avg: ParticipantGroupAvgAggregateOutputType | null
    _sum: ParticipantGroupSumAggregateOutputType | null
    _min: ParticipantGroupMinAggregateOutputType | null
    _max: ParticipantGroupMaxAggregateOutputType | null
  }

  type GetParticipantGroupGroupByPayload<T extends ParticipantGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentGroupId?: boolean
    participantId?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantGroup"]>

  export type ParticipantGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentGroupId?: boolean
    participantId?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantGroup"]>

  export type ParticipantGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentGroupId?: boolean
    participantId?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantGroup"]>

  export type ParticipantGroupSelectScalar = {
    id?: boolean
    tournamentGroupId?: boolean
    participantId?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentGroupId" | "participantId" | "wins" | "losses" | "points" | "createdAt" | "updatedAt", ExtArgs["result"]["participantGroup"]>
  export type ParticipantGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ParticipantGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ParticipantGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TournamentGroupDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $ParticipantGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantGroup"
    objects: {
      group: Prisma.$TournamentGroupPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentGroupId: number
      participantId: number
      wins: number
      losses: number
      points: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participantGroup"]>
    composites: {}
  }

  type ParticipantGroupGetPayload<S extends boolean | null | undefined | ParticipantGroupDefaultArgs> = $Result.GetResult<Prisma.$ParticipantGroupPayload, S>

  type ParticipantGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantGroupCountAggregateInputType | true
    }

  export interface ParticipantGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantGroup'], meta: { name: 'ParticipantGroup' } }
    /**
     * Find zero or one ParticipantGroup that matches the filter.
     * @param {ParticipantGroupFindUniqueArgs} args - Arguments to find a ParticipantGroup
     * @example
     * // Get one ParticipantGroup
     * const participantGroup = await prisma.participantGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantGroupFindUniqueArgs>(args: SelectSubset<T, ParticipantGroupFindUniqueArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantGroupFindUniqueOrThrowArgs} args - Arguments to find a ParticipantGroup
     * @example
     * // Get one ParticipantGroup
     * const participantGroup = await prisma.participantGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupFindFirstArgs} args - Arguments to find a ParticipantGroup
     * @example
     * // Get one ParticipantGroup
     * const participantGroup = await prisma.participantGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantGroupFindFirstArgs>(args?: SelectSubset<T, ParticipantGroupFindFirstArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupFindFirstOrThrowArgs} args - Arguments to find a ParticipantGroup
     * @example
     * // Get one ParticipantGroup
     * const participantGroup = await prisma.participantGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantGroups
     * const participantGroups = await prisma.participantGroup.findMany()
     * 
     * // Get first 10 ParticipantGroups
     * const participantGroups = await prisma.participantGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantGroupWithIdOnly = await prisma.participantGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantGroupFindManyArgs>(args?: SelectSubset<T, ParticipantGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantGroup.
     * @param {ParticipantGroupCreateArgs} args - Arguments to create a ParticipantGroup.
     * @example
     * // Create one ParticipantGroup
     * const ParticipantGroup = await prisma.participantGroup.create({
     *   data: {
     *     // ... data to create a ParticipantGroup
     *   }
     * })
     * 
     */
    create<T extends ParticipantGroupCreateArgs>(args: SelectSubset<T, ParticipantGroupCreateArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantGroups.
     * @param {ParticipantGroupCreateManyArgs} args - Arguments to create many ParticipantGroups.
     * @example
     * // Create many ParticipantGroups
     * const participantGroup = await prisma.participantGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantGroupCreateManyArgs>(args?: SelectSubset<T, ParticipantGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantGroups and returns the data saved in the database.
     * @param {ParticipantGroupCreateManyAndReturnArgs} args - Arguments to create many ParticipantGroups.
     * @example
     * // Create many ParticipantGroups
     * const participantGroup = await prisma.participantGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantGroups and only return the `id`
     * const participantGroupWithIdOnly = await prisma.participantGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantGroup.
     * @param {ParticipantGroupDeleteArgs} args - Arguments to delete one ParticipantGroup.
     * @example
     * // Delete one ParticipantGroup
     * const ParticipantGroup = await prisma.participantGroup.delete({
     *   where: {
     *     // ... filter to delete one ParticipantGroup
     *   }
     * })
     * 
     */
    delete<T extends ParticipantGroupDeleteArgs>(args: SelectSubset<T, ParticipantGroupDeleteArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantGroup.
     * @param {ParticipantGroupUpdateArgs} args - Arguments to update one ParticipantGroup.
     * @example
     * // Update one ParticipantGroup
     * const participantGroup = await prisma.participantGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantGroupUpdateArgs>(args: SelectSubset<T, ParticipantGroupUpdateArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantGroups.
     * @param {ParticipantGroupDeleteManyArgs} args - Arguments to filter ParticipantGroups to delete.
     * @example
     * // Delete a few ParticipantGroups
     * const { count } = await prisma.participantGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantGroupDeleteManyArgs>(args?: SelectSubset<T, ParticipantGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantGroups
     * const participantGroup = await prisma.participantGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantGroupUpdateManyArgs>(args: SelectSubset<T, ParticipantGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantGroups and returns the data updated in the database.
     * @param {ParticipantGroupUpdateManyAndReturnArgs} args - Arguments to update many ParticipantGroups.
     * @example
     * // Update many ParticipantGroups
     * const participantGroup = await prisma.participantGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantGroups and only return the `id`
     * const participantGroupWithIdOnly = await prisma.participantGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantGroup.
     * @param {ParticipantGroupUpsertArgs} args - Arguments to update or create a ParticipantGroup.
     * @example
     * // Update or create a ParticipantGroup
     * const participantGroup = await prisma.participantGroup.upsert({
     *   create: {
     *     // ... data to create a ParticipantGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantGroup we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantGroupUpsertArgs>(args: SelectSubset<T, ParticipantGroupUpsertArgs<ExtArgs>>): Prisma__ParticipantGroupClient<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupCountArgs} args - Arguments to filter ParticipantGroups to count.
     * @example
     * // Count the number of ParticipantGroups
     * const count = await prisma.participantGroup.count({
     *   where: {
     *     // ... the filter for the ParticipantGroups we want to count
     *   }
     * })
    **/
    count<T extends ParticipantGroupCountArgs>(
      args?: Subset<T, ParticipantGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantGroupAggregateArgs>(args: Subset<T, ParticipantGroupAggregateArgs>): Prisma.PrismaPromise<GetParticipantGroupAggregateType<T>>

    /**
     * Group by ParticipantGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantGroup model
   */
  readonly fields: ParticipantGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends TournamentGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentGroupDefaultArgs<ExtArgs>>): Prisma__TournamentGroupClient<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipantGroup model
   */
  interface ParticipantGroupFieldRefs {
    readonly id: FieldRef<"ParticipantGroup", 'Int'>
    readonly tournamentGroupId: FieldRef<"ParticipantGroup", 'Int'>
    readonly participantId: FieldRef<"ParticipantGroup", 'Int'>
    readonly wins: FieldRef<"ParticipantGroup", 'Int'>
    readonly losses: FieldRef<"ParticipantGroup", 'Int'>
    readonly points: FieldRef<"ParticipantGroup", 'Int'>
    readonly createdAt: FieldRef<"ParticipantGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ParticipantGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantGroup findUnique
   */
  export type ParticipantGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantGroup to fetch.
     */
    where: ParticipantGroupWhereUniqueInput
  }

  /**
   * ParticipantGroup findUniqueOrThrow
   */
  export type ParticipantGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantGroup to fetch.
     */
    where: ParticipantGroupWhereUniqueInput
  }

  /**
   * ParticipantGroup findFirst
   */
  export type ParticipantGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantGroup to fetch.
     */
    where?: ParticipantGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantGroups to fetch.
     */
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantGroups.
     */
    cursor?: ParticipantGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantGroups.
     */
    distinct?: ParticipantGroupScalarFieldEnum | ParticipantGroupScalarFieldEnum[]
  }

  /**
   * ParticipantGroup findFirstOrThrow
   */
  export type ParticipantGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantGroup to fetch.
     */
    where?: ParticipantGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantGroups to fetch.
     */
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantGroups.
     */
    cursor?: ParticipantGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantGroups.
     */
    distinct?: ParticipantGroupScalarFieldEnum | ParticipantGroupScalarFieldEnum[]
  }

  /**
   * ParticipantGroup findMany
   */
  export type ParticipantGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantGroups to fetch.
     */
    where?: ParticipantGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantGroups to fetch.
     */
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantGroups.
     */
    cursor?: ParticipantGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantGroups.
     */
    skip?: number
    distinct?: ParticipantGroupScalarFieldEnum | ParticipantGroupScalarFieldEnum[]
  }

  /**
   * ParticipantGroup create
   */
  export type ParticipantGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantGroup.
     */
    data: XOR<ParticipantGroupCreateInput, ParticipantGroupUncheckedCreateInput>
  }

  /**
   * ParticipantGroup createMany
   */
  export type ParticipantGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantGroups.
     */
    data: ParticipantGroupCreateManyInput | ParticipantGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantGroup createManyAndReturn
   */
  export type ParticipantGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantGroups.
     */
    data: ParticipantGroupCreateManyInput | ParticipantGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantGroup update
   */
  export type ParticipantGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantGroup.
     */
    data: XOR<ParticipantGroupUpdateInput, ParticipantGroupUncheckedUpdateInput>
    /**
     * Choose, which ParticipantGroup to update.
     */
    where: ParticipantGroupWhereUniqueInput
  }

  /**
   * ParticipantGroup updateMany
   */
  export type ParticipantGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantGroups.
     */
    data: XOR<ParticipantGroupUpdateManyMutationInput, ParticipantGroupUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantGroups to update
     */
    where?: ParticipantGroupWhereInput
    /**
     * Limit how many ParticipantGroups to update.
     */
    limit?: number
  }

  /**
   * ParticipantGroup updateManyAndReturn
   */
  export type ParticipantGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantGroups.
     */
    data: XOR<ParticipantGroupUpdateManyMutationInput, ParticipantGroupUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantGroups to update
     */
    where?: ParticipantGroupWhereInput
    /**
     * Limit how many ParticipantGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantGroup upsert
   */
  export type ParticipantGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantGroup to update in case it exists.
     */
    where: ParticipantGroupWhereUniqueInput
    /**
     * In case the ParticipantGroup found by the `where` argument doesn't exist, create a new ParticipantGroup with this data.
     */
    create: XOR<ParticipantGroupCreateInput, ParticipantGroupUncheckedCreateInput>
    /**
     * In case the ParticipantGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantGroupUpdateInput, ParticipantGroupUncheckedUpdateInput>
  }

  /**
   * ParticipantGroup delete
   */
  export type ParticipantGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    /**
     * Filter which ParticipantGroup to delete.
     */
    where: ParticipantGroupWhereUniqueInput
  }

  /**
   * ParticipantGroup deleteMany
   */
  export type ParticipantGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantGroups to delete
     */
    where?: ParticipantGroupWhereInput
    /**
     * Limit how many ParticipantGroups to delete.
     */
    limit?: number
  }

  /**
   * ParticipantGroup without action
   */
  export type ParticipantGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantTournament
   */

  export type AggregateParticipantTournament = {
    _count: ParticipantTournamentCountAggregateOutputType | null
    _avg: ParticipantTournamentAvgAggregateOutputType | null
    _sum: ParticipantTournamentSumAggregateOutputType | null
    _min: ParticipantTournamentMinAggregateOutputType | null
    _max: ParticipantTournamentMaxAggregateOutputType | null
  }

  export type ParticipantTournamentAvgAggregateOutputType = {
    id: number | null
    participantId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
  }

  export type ParticipantTournamentSumAggregateOutputType = {
    id: number | null
    participantId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
  }

  export type ParticipantTournamentMinAggregateOutputType = {
    id: number | null
    participantId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantTournamentMaxAggregateOutputType = {
    id: number | null
    participantId: number | null
    tournamentId: number | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantTournamentCountAggregateOutputType = {
    id: number
    participantId: number
    tournamentId: number
    wins: number
    losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantTournamentAvgAggregateInputType = {
    id?: true
    participantId?: true
    tournamentId?: true
    wins?: true
    losses?: true
  }

  export type ParticipantTournamentSumAggregateInputType = {
    id?: true
    participantId?: true
    tournamentId?: true
    wins?: true
    losses?: true
  }

  export type ParticipantTournamentMinAggregateInputType = {
    id?: true
    participantId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantTournamentMaxAggregateInputType = {
    id?: true
    participantId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantTournamentCountAggregateInputType = {
    id?: true
    participantId?: true
    tournamentId?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantTournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantTournament to aggregate.
     */
    where?: ParticipantTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantTournaments to fetch.
     */
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantTournaments
    **/
    _count?: true | ParticipantTournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantTournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantTournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantTournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantTournamentMaxAggregateInputType
  }

  export type GetParticipantTournamentAggregateType<T extends ParticipantTournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantTournament[P]>
      : GetScalarType<T[P], AggregateParticipantTournament[P]>
  }




  export type ParticipantTournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantTournamentWhereInput
    orderBy?: ParticipantTournamentOrderByWithAggregationInput | ParticipantTournamentOrderByWithAggregationInput[]
    by: ParticipantTournamentScalarFieldEnum[] | ParticipantTournamentScalarFieldEnum
    having?: ParticipantTournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantTournamentCountAggregateInputType | true
    _avg?: ParticipantTournamentAvgAggregateInputType
    _sum?: ParticipantTournamentSumAggregateInputType
    _min?: ParticipantTournamentMinAggregateInputType
    _max?: ParticipantTournamentMaxAggregateInputType
  }

  export type ParticipantTournamentGroupByOutputType = {
    id: number
    participantId: number
    tournamentId: number
    wins: number
    losses: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipantTournamentCountAggregateOutputType | null
    _avg: ParticipantTournamentAvgAggregateOutputType | null
    _sum: ParticipantTournamentSumAggregateOutputType | null
    _min: ParticipantTournamentMinAggregateOutputType | null
    _max: ParticipantTournamentMaxAggregateOutputType | null
  }

  type GetParticipantTournamentGroupByPayload<T extends ParticipantTournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantTournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantTournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantTournamentGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantTournamentGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantTournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantTournament"]>

  export type ParticipantTournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantTournament"]>

  export type ParticipantTournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantTournament"]>

  export type ParticipantTournamentSelectScalar = {
    id?: boolean
    participantId?: boolean
    tournamentId?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantTournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "tournamentId" | "wins" | "losses" | "createdAt" | "updatedAt", ExtArgs["result"]["participantTournament"]>
  export type ParticipantTournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ParticipantTournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ParticipantTournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $ParticipantTournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantTournament"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantId: number
      tournamentId: number
      wins: number
      losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participantTournament"]>
    composites: {}
  }

  type ParticipantTournamentGetPayload<S extends boolean | null | undefined | ParticipantTournamentDefaultArgs> = $Result.GetResult<Prisma.$ParticipantTournamentPayload, S>

  type ParticipantTournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantTournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantTournamentCountAggregateInputType | true
    }

  export interface ParticipantTournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantTournament'], meta: { name: 'ParticipantTournament' } }
    /**
     * Find zero or one ParticipantTournament that matches the filter.
     * @param {ParticipantTournamentFindUniqueArgs} args - Arguments to find a ParticipantTournament
     * @example
     * // Get one ParticipantTournament
     * const participantTournament = await prisma.participantTournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantTournamentFindUniqueArgs>(args: SelectSubset<T, ParticipantTournamentFindUniqueArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantTournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantTournamentFindUniqueOrThrowArgs} args - Arguments to find a ParticipantTournament
     * @example
     * // Get one ParticipantTournament
     * const participantTournament = await prisma.participantTournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantTournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantTournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantTournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentFindFirstArgs} args - Arguments to find a ParticipantTournament
     * @example
     * // Get one ParticipantTournament
     * const participantTournament = await prisma.participantTournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantTournamentFindFirstArgs>(args?: SelectSubset<T, ParticipantTournamentFindFirstArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantTournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentFindFirstOrThrowArgs} args - Arguments to find a ParticipantTournament
     * @example
     * // Get one ParticipantTournament
     * const participantTournament = await prisma.participantTournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantTournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantTournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantTournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantTournaments
     * const participantTournaments = await prisma.participantTournament.findMany()
     * 
     * // Get first 10 ParticipantTournaments
     * const participantTournaments = await prisma.participantTournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantTournamentWithIdOnly = await prisma.participantTournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantTournamentFindManyArgs>(args?: SelectSubset<T, ParticipantTournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantTournament.
     * @param {ParticipantTournamentCreateArgs} args - Arguments to create a ParticipantTournament.
     * @example
     * // Create one ParticipantTournament
     * const ParticipantTournament = await prisma.participantTournament.create({
     *   data: {
     *     // ... data to create a ParticipantTournament
     *   }
     * })
     * 
     */
    create<T extends ParticipantTournamentCreateArgs>(args: SelectSubset<T, ParticipantTournamentCreateArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantTournaments.
     * @param {ParticipantTournamentCreateManyArgs} args - Arguments to create many ParticipantTournaments.
     * @example
     * // Create many ParticipantTournaments
     * const participantTournament = await prisma.participantTournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantTournamentCreateManyArgs>(args?: SelectSubset<T, ParticipantTournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantTournaments and returns the data saved in the database.
     * @param {ParticipantTournamentCreateManyAndReturnArgs} args - Arguments to create many ParticipantTournaments.
     * @example
     * // Create many ParticipantTournaments
     * const participantTournament = await prisma.participantTournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantTournaments and only return the `id`
     * const participantTournamentWithIdOnly = await prisma.participantTournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantTournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantTournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantTournament.
     * @param {ParticipantTournamentDeleteArgs} args - Arguments to delete one ParticipantTournament.
     * @example
     * // Delete one ParticipantTournament
     * const ParticipantTournament = await prisma.participantTournament.delete({
     *   where: {
     *     // ... filter to delete one ParticipantTournament
     *   }
     * })
     * 
     */
    delete<T extends ParticipantTournamentDeleteArgs>(args: SelectSubset<T, ParticipantTournamentDeleteArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantTournament.
     * @param {ParticipantTournamentUpdateArgs} args - Arguments to update one ParticipantTournament.
     * @example
     * // Update one ParticipantTournament
     * const participantTournament = await prisma.participantTournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantTournamentUpdateArgs>(args: SelectSubset<T, ParticipantTournamentUpdateArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantTournaments.
     * @param {ParticipantTournamentDeleteManyArgs} args - Arguments to filter ParticipantTournaments to delete.
     * @example
     * // Delete a few ParticipantTournaments
     * const { count } = await prisma.participantTournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantTournamentDeleteManyArgs>(args?: SelectSubset<T, ParticipantTournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantTournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantTournaments
     * const participantTournament = await prisma.participantTournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantTournamentUpdateManyArgs>(args: SelectSubset<T, ParticipantTournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantTournaments and returns the data updated in the database.
     * @param {ParticipantTournamentUpdateManyAndReturnArgs} args - Arguments to update many ParticipantTournaments.
     * @example
     * // Update many ParticipantTournaments
     * const participantTournament = await prisma.participantTournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantTournaments and only return the `id`
     * const participantTournamentWithIdOnly = await prisma.participantTournament.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantTournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantTournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantTournament.
     * @param {ParticipantTournamentUpsertArgs} args - Arguments to update or create a ParticipantTournament.
     * @example
     * // Update or create a ParticipantTournament
     * const participantTournament = await prisma.participantTournament.upsert({
     *   create: {
     *     // ... data to create a ParticipantTournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantTournament we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantTournamentUpsertArgs>(args: SelectSubset<T, ParticipantTournamentUpsertArgs<ExtArgs>>): Prisma__ParticipantTournamentClient<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantTournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentCountArgs} args - Arguments to filter ParticipantTournaments to count.
     * @example
     * // Count the number of ParticipantTournaments
     * const count = await prisma.participantTournament.count({
     *   where: {
     *     // ... the filter for the ParticipantTournaments we want to count
     *   }
     * })
    **/
    count<T extends ParticipantTournamentCountArgs>(
      args?: Subset<T, ParticipantTournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantTournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantTournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantTournamentAggregateArgs>(args: Subset<T, ParticipantTournamentAggregateArgs>): Prisma.PrismaPromise<GetParticipantTournamentAggregateType<T>>

    /**
     * Group by ParticipantTournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantTournamentGroupByArgs} args - Group by arguments.
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
      T extends ParticipantTournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantTournamentGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantTournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantTournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantTournament model
   */
  readonly fields: ParticipantTournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantTournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantTournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipantTournament model
   */
  interface ParticipantTournamentFieldRefs {
    readonly id: FieldRef<"ParticipantTournament", 'Int'>
    readonly participantId: FieldRef<"ParticipantTournament", 'Int'>
    readonly tournamentId: FieldRef<"ParticipantTournament", 'Int'>
    readonly wins: FieldRef<"ParticipantTournament", 'Int'>
    readonly losses: FieldRef<"ParticipantTournament", 'Int'>
    readonly createdAt: FieldRef<"ParticipantTournament", 'DateTime'>
    readonly updatedAt: FieldRef<"ParticipantTournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantTournament findUnique
   */
  export type ParticipantTournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantTournament to fetch.
     */
    where: ParticipantTournamentWhereUniqueInput
  }

  /**
   * ParticipantTournament findUniqueOrThrow
   */
  export type ParticipantTournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantTournament to fetch.
     */
    where: ParticipantTournamentWhereUniqueInput
  }

  /**
   * ParticipantTournament findFirst
   */
  export type ParticipantTournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantTournament to fetch.
     */
    where?: ParticipantTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantTournaments to fetch.
     */
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantTournaments.
     */
    cursor?: ParticipantTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantTournaments.
     */
    distinct?: ParticipantTournamentScalarFieldEnum | ParticipantTournamentScalarFieldEnum[]
  }

  /**
   * ParticipantTournament findFirstOrThrow
   */
  export type ParticipantTournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantTournament to fetch.
     */
    where?: ParticipantTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantTournaments to fetch.
     */
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantTournaments.
     */
    cursor?: ParticipantTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantTournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantTournaments.
     */
    distinct?: ParticipantTournamentScalarFieldEnum | ParticipantTournamentScalarFieldEnum[]
  }

  /**
   * ParticipantTournament findMany
   */
  export type ParticipantTournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantTournaments to fetch.
     */
    where?: ParticipantTournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantTournaments to fetch.
     */
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantTournaments.
     */
    cursor?: ParticipantTournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantTournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantTournaments.
     */
    skip?: number
    distinct?: ParticipantTournamentScalarFieldEnum | ParticipantTournamentScalarFieldEnum[]
  }

  /**
   * ParticipantTournament create
   */
  export type ParticipantTournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantTournament.
     */
    data: XOR<ParticipantTournamentCreateInput, ParticipantTournamentUncheckedCreateInput>
  }

  /**
   * ParticipantTournament createMany
   */
  export type ParticipantTournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantTournaments.
     */
    data: ParticipantTournamentCreateManyInput | ParticipantTournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantTournament createManyAndReturn
   */
  export type ParticipantTournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantTournaments.
     */
    data: ParticipantTournamentCreateManyInput | ParticipantTournamentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantTournament update
   */
  export type ParticipantTournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantTournament.
     */
    data: XOR<ParticipantTournamentUpdateInput, ParticipantTournamentUncheckedUpdateInput>
    /**
     * Choose, which ParticipantTournament to update.
     */
    where: ParticipantTournamentWhereUniqueInput
  }

  /**
   * ParticipantTournament updateMany
   */
  export type ParticipantTournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantTournaments.
     */
    data: XOR<ParticipantTournamentUpdateManyMutationInput, ParticipantTournamentUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantTournaments to update
     */
    where?: ParticipantTournamentWhereInput
    /**
     * Limit how many ParticipantTournaments to update.
     */
    limit?: number
  }

  /**
   * ParticipantTournament updateManyAndReturn
   */
  export type ParticipantTournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantTournaments.
     */
    data: XOR<ParticipantTournamentUpdateManyMutationInput, ParticipantTournamentUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantTournaments to update
     */
    where?: ParticipantTournamentWhereInput
    /**
     * Limit how many ParticipantTournaments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantTournament upsert
   */
  export type ParticipantTournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantTournament to update in case it exists.
     */
    where: ParticipantTournamentWhereUniqueInput
    /**
     * In case the ParticipantTournament found by the `where` argument doesn't exist, create a new ParticipantTournament with this data.
     */
    create: XOR<ParticipantTournamentCreateInput, ParticipantTournamentUncheckedCreateInput>
    /**
     * In case the ParticipantTournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantTournamentUpdateInput, ParticipantTournamentUncheckedUpdateInput>
  }

  /**
   * ParticipantTournament delete
   */
  export type ParticipantTournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    /**
     * Filter which ParticipantTournament to delete.
     */
    where: ParticipantTournamentWhereUniqueInput
  }

  /**
   * ParticipantTournament deleteMany
   */
  export type ParticipantTournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantTournaments to delete
     */
    where?: ParticipantTournamentWhereInput
    /**
     * Limit how many ParticipantTournaments to delete.
     */
    limit?: number
  }

  /**
   * ParticipantTournament without action
   */
  export type ParticipantTournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
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
    status: $Enums.TournamentStatus | null
    type: $Enums.ParticipantType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.TournamentStatus | null
    type: $Enums.ParticipantType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    status: number
    type: number
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
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    type?: true
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
    status: $Enums.TournamentStatus
    type: $Enums.ParticipantType
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
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phases?: boolean | Tournament$phasesArgs<ExtArgs>
    participants?: boolean | Tournament$participantsArgs<ExtArgs>
    winners?: boolean | Tournament$winnersArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | Tournament$phasesArgs<ExtArgs>
    participants?: boolean | Tournament$participantsArgs<ExtArgs>
    winners?: boolean | Tournament$winnersArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      phases: Prisma.$TournamentPhasePayload<ExtArgs>[]
      participants: Prisma.$ParticipantTournamentPayload<ExtArgs>[]
      winners: Prisma.$TournamentWinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.TournamentStatus
      type: $Enums.ParticipantType
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
    phases<T extends Tournament$phasesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Tournament$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantTournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends Tournament$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentWinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly status: FieldRef<"Tournament", 'TournamentStatus'>
    readonly type: FieldRef<"Tournament", 'ParticipantType'>
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
   * Tournament.phases
   */
  export type Tournament$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    where?: TournamentPhaseWhereInput
    orderBy?: TournamentPhaseOrderByWithRelationInput | TournamentPhaseOrderByWithRelationInput[]
    cursor?: TournamentPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentPhaseScalarFieldEnum | TournamentPhaseScalarFieldEnum[]
  }

  /**
   * Tournament.participants
   */
  export type Tournament$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantTournament
     */
    select?: ParticipantTournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantTournament
     */
    omit?: ParticipantTournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantTournamentInclude<ExtArgs> | null
    where?: ParticipantTournamentWhereInput
    orderBy?: ParticipantTournamentOrderByWithRelationInput | ParticipantTournamentOrderByWithRelationInput[]
    cursor?: ParticipantTournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantTournamentScalarFieldEnum | ParticipantTournamentScalarFieldEnum[]
  }

  /**
   * Tournament.winners
   */
  export type Tournament$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    tournamentPhaseId: number | null
    groupNumber: number | null
  }

  export type TournamentGroupSumAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    groupNumber: number | null
  }

  export type TournamentGroupMinAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    groupNumber: number | null
    isGroupMatchesEnded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentGroupMaxAggregateOutputType = {
    id: number | null
    tournamentPhaseId: number | null
    groupNumber: number | null
    isGroupMatchesEnded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentGroupCountAggregateOutputType = {
    id: number
    tournamentPhaseId: number
    groupNumber: number
    isGroupMatchesEnded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentGroupAvgAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    groupNumber?: true
  }

  export type TournamentGroupSumAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    groupNumber?: true
  }

  export type TournamentGroupMinAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    groupNumber?: true
    isGroupMatchesEnded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentGroupMaxAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
    groupNumber?: true
    isGroupMatchesEnded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentGroupCountAggregateInputType = {
    id?: true
    tournamentPhaseId?: true
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
    tournamentPhaseId: number
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
    tournamentPhaseId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    participantGroups?: boolean | TournamentGroup$participantGroupsArgs<ExtArgs>
    matches?: boolean | TournamentGroup$matchesArgs<ExtArgs>
    _count?: boolean | TournamentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentPhaseId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentGroup"]>

  export type TournamentGroupSelectScalar = {
    id?: boolean
    tournamentPhaseId?: boolean
    groupNumber?: boolean
    isGroupMatchesEnded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentPhaseId" | "groupNumber" | "isGroupMatchesEnded" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentGroup"]>
  export type TournamentGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
    participantGroups?: boolean | TournamentGroup$participantGroupsArgs<ExtArgs>
    matches?: boolean | TournamentGroup$matchesArgs<ExtArgs>
    _count?: boolean | TournamentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }
  export type TournamentGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentPhase?: boolean | TournamentPhaseDefaultArgs<ExtArgs>
  }

  export type $TournamentGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentGroup"
    objects: {
      tournamentPhase: Prisma.$TournamentPhasePayload<ExtArgs>
      participantGroups: Prisma.$ParticipantGroupPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentPhaseId: number
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
    tournamentPhase<T extends TournamentPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhaseDefaultArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantGroups<T extends TournamentGroup$participantGroupsArgs<ExtArgs> = {}>(args?: Subset<T, TournamentGroup$participantGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends TournamentGroup$matchesArgs<ExtArgs> = {}>(args?: Subset<T, TournamentGroup$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tournamentPhaseId: FieldRef<"TournamentGroup", 'Int'>
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
   * TournamentGroup.participantGroups
   */
  export type TournamentGroup$participantGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantGroup
     */
    select?: ParticipantGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantGroup
     */
    omit?: ParticipantGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantGroupInclude<ExtArgs> | null
    where?: ParticipantGroupWhereInput
    orderBy?: ParticipantGroupOrderByWithRelationInput | ParticipantGroupOrderByWithRelationInput[]
    cursor?: ParticipantGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantGroupScalarFieldEnum | ParticipantGroupScalarFieldEnum[]
  }

  /**
   * TournamentGroup.matches
   */
  export type TournamentGroup$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model TournamentPhase
   */

  export type AggregateTournamentPhase = {
    _count: TournamentPhaseCountAggregateOutputType | null
    _avg: TournamentPhaseAvgAggregateOutputType | null
    _sum: TournamentPhaseSumAggregateOutputType | null
    _min: TournamentPhaseMinAggregateOutputType | null
    _max: TournamentPhaseMaxAggregateOutputType | null
  }

  export type TournamentPhaseAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    order: number | null
  }

  export type TournamentPhaseSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    order: number | null
  }

  export type TournamentPhaseMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    phaseType: $Enums.PhaseType | null
    order: number | null
    isCompleted: boolean | null
  }

  export type TournamentPhaseMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    phaseType: $Enums.PhaseType | null
    order: number | null
    isCompleted: boolean | null
  }

  export type TournamentPhaseCountAggregateOutputType = {
    id: number
    tournamentId: number
    phaseType: number
    order: number
    isCompleted: number
    _all: number
  }


  export type TournamentPhaseAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    order?: true
  }

  export type TournamentPhaseSumAggregateInputType = {
    id?: true
    tournamentId?: true
    order?: true
  }

  export type TournamentPhaseMinAggregateInputType = {
    id?: true
    tournamentId?: true
    phaseType?: true
    order?: true
    isCompleted?: true
  }

  export type TournamentPhaseMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    phaseType?: true
    order?: true
    isCompleted?: true
  }

  export type TournamentPhaseCountAggregateInputType = {
    id?: true
    tournamentId?: true
    phaseType?: true
    order?: true
    isCompleted?: true
    _all?: true
  }

  export type TournamentPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPhase to aggregate.
     */
    where?: TournamentPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPhases to fetch.
     */
    orderBy?: TournamentPhaseOrderByWithRelationInput | TournamentPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentPhases
    **/
    _count?: true | TournamentPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentPhaseMaxAggregateInputType
  }

  export type GetTournamentPhaseAggregateType<T extends TournamentPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentPhase[P]>
      : GetScalarType<T[P], AggregateTournamentPhase[P]>
  }




  export type TournamentPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentPhaseWhereInput
    orderBy?: TournamentPhaseOrderByWithAggregationInput | TournamentPhaseOrderByWithAggregationInput[]
    by: TournamentPhaseScalarFieldEnum[] | TournamentPhaseScalarFieldEnum
    having?: TournamentPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentPhaseCountAggregateInputType | true
    _avg?: TournamentPhaseAvgAggregateInputType
    _sum?: TournamentPhaseSumAggregateInputType
    _min?: TournamentPhaseMinAggregateInputType
    _max?: TournamentPhaseMaxAggregateInputType
  }

  export type TournamentPhaseGroupByOutputType = {
    id: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted: boolean
    _count: TournamentPhaseCountAggregateOutputType | null
    _avg: TournamentPhaseAvgAggregateOutputType | null
    _sum: TournamentPhaseSumAggregateOutputType | null
    _min: TournamentPhaseMinAggregateOutputType | null
    _max: TournamentPhaseMaxAggregateOutputType | null
  }

  type GetTournamentPhaseGroupByPayload<T extends TournamentPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentPhaseGroupByOutputType[P]>
        }
      >
    >


  export type TournamentPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    phaseType?: boolean
    order?: boolean
    isCompleted?: boolean
    elimination?: boolean | TournamentPhase$eliminationArgs<ExtArgs>
    groups?: boolean | TournamentPhase$groupsArgs<ExtArgs>
    matches?: boolean | TournamentPhase$matchesArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    _count?: boolean | TournamentPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentPhase"]>

  export type TournamentPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    phaseType?: boolean
    order?: boolean
    isCompleted?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentPhase"]>

  export type TournamentPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    phaseType?: boolean
    order?: boolean
    isCompleted?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentPhase"]>

  export type TournamentPhaseSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    phaseType?: boolean
    order?: boolean
    isCompleted?: boolean
  }

  export type TournamentPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "phaseType" | "order" | "isCompleted", ExtArgs["result"]["tournamentPhase"]>
  export type TournamentPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elimination?: boolean | TournamentPhase$eliminationArgs<ExtArgs>
    groups?: boolean | TournamentPhase$groupsArgs<ExtArgs>
    matches?: boolean | TournamentPhase$matchesArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    _count?: boolean | TournamentPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type TournamentPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $TournamentPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentPhase"
    objects: {
      elimination: Prisma.$EliminationPayload<ExtArgs> | null
      groups: Prisma.$TournamentGroupPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      tournament: Prisma.$TournamentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      phaseType: $Enums.PhaseType
      order: number
      isCompleted: boolean
    }, ExtArgs["result"]["tournamentPhase"]>
    composites: {}
  }

  type TournamentPhaseGetPayload<S extends boolean | null | undefined | TournamentPhaseDefaultArgs> = $Result.GetResult<Prisma.$TournamentPhasePayload, S>

  type TournamentPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentPhaseCountAggregateInputType | true
    }

  export interface TournamentPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentPhase'], meta: { name: 'TournamentPhase' } }
    /**
     * Find zero or one TournamentPhase that matches the filter.
     * @param {TournamentPhaseFindUniqueArgs} args - Arguments to find a TournamentPhase
     * @example
     * // Get one TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentPhaseFindUniqueArgs>(args: SelectSubset<T, TournamentPhaseFindUniqueArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentPhaseFindUniqueOrThrowArgs} args - Arguments to find a TournamentPhase
     * @example
     * // Get one TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseFindFirstArgs} args - Arguments to find a TournamentPhase
     * @example
     * // Get one TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentPhaseFindFirstArgs>(args?: SelectSubset<T, TournamentPhaseFindFirstArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseFindFirstOrThrowArgs} args - Arguments to find a TournamentPhase
     * @example
     * // Get one TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentPhases
     * const tournamentPhases = await prisma.tournamentPhase.findMany()
     * 
     * // Get first 10 TournamentPhases
     * const tournamentPhases = await prisma.tournamentPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentPhaseWithIdOnly = await prisma.tournamentPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentPhaseFindManyArgs>(args?: SelectSubset<T, TournamentPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentPhase.
     * @param {TournamentPhaseCreateArgs} args - Arguments to create a TournamentPhase.
     * @example
     * // Create one TournamentPhase
     * const TournamentPhase = await prisma.tournamentPhase.create({
     *   data: {
     *     // ... data to create a TournamentPhase
     *   }
     * })
     * 
     */
    create<T extends TournamentPhaseCreateArgs>(args: SelectSubset<T, TournamentPhaseCreateArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentPhases.
     * @param {TournamentPhaseCreateManyArgs} args - Arguments to create many TournamentPhases.
     * @example
     * // Create many TournamentPhases
     * const tournamentPhase = await prisma.tournamentPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentPhaseCreateManyArgs>(args?: SelectSubset<T, TournamentPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentPhases and returns the data saved in the database.
     * @param {TournamentPhaseCreateManyAndReturnArgs} args - Arguments to create many TournamentPhases.
     * @example
     * // Create many TournamentPhases
     * const tournamentPhase = await prisma.tournamentPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentPhases and only return the `id`
     * const tournamentPhaseWithIdOnly = await prisma.tournamentPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentPhase.
     * @param {TournamentPhaseDeleteArgs} args - Arguments to delete one TournamentPhase.
     * @example
     * // Delete one TournamentPhase
     * const TournamentPhase = await prisma.tournamentPhase.delete({
     *   where: {
     *     // ... filter to delete one TournamentPhase
     *   }
     * })
     * 
     */
    delete<T extends TournamentPhaseDeleteArgs>(args: SelectSubset<T, TournamentPhaseDeleteArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentPhase.
     * @param {TournamentPhaseUpdateArgs} args - Arguments to update one TournamentPhase.
     * @example
     * // Update one TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentPhaseUpdateArgs>(args: SelectSubset<T, TournamentPhaseUpdateArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentPhases.
     * @param {TournamentPhaseDeleteManyArgs} args - Arguments to filter TournamentPhases to delete.
     * @example
     * // Delete a few TournamentPhases
     * const { count } = await prisma.tournamentPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentPhaseDeleteManyArgs>(args?: SelectSubset<T, TournamentPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentPhases
     * const tournamentPhase = await prisma.tournamentPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentPhaseUpdateManyArgs>(args: SelectSubset<T, TournamentPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentPhases and returns the data updated in the database.
     * @param {TournamentPhaseUpdateManyAndReturnArgs} args - Arguments to update many TournamentPhases.
     * @example
     * // Update many TournamentPhases
     * const tournamentPhase = await prisma.tournamentPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentPhases and only return the `id`
     * const tournamentPhaseWithIdOnly = await prisma.tournamentPhase.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentPhase.
     * @param {TournamentPhaseUpsertArgs} args - Arguments to update or create a TournamentPhase.
     * @example
     * // Update or create a TournamentPhase
     * const tournamentPhase = await prisma.tournamentPhase.upsert({
     *   create: {
     *     // ... data to create a TournamentPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentPhase we want to update
     *   }
     * })
     */
    upsert<T extends TournamentPhaseUpsertArgs>(args: SelectSubset<T, TournamentPhaseUpsertArgs<ExtArgs>>): Prisma__TournamentPhaseClient<$Result.GetResult<Prisma.$TournamentPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseCountArgs} args - Arguments to filter TournamentPhases to count.
     * @example
     * // Count the number of TournamentPhases
     * const count = await prisma.tournamentPhase.count({
     *   where: {
     *     // ... the filter for the TournamentPhases we want to count
     *   }
     * })
    **/
    count<T extends TournamentPhaseCountArgs>(
      args?: Subset<T, TournamentPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentPhaseAggregateArgs>(args: Subset<T, TournamentPhaseAggregateArgs>): Prisma.PrismaPromise<GetTournamentPhaseAggregateType<T>>

    /**
     * Group by TournamentPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPhaseGroupByArgs} args - Group by arguments.
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
      T extends TournamentPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentPhaseGroupByArgs['orderBy'] }
        : { orderBy?: TournamentPhaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentPhase model
   */
  readonly fields: TournamentPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elimination<T extends TournamentPhase$eliminationArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhase$eliminationArgs<ExtArgs>>): Prisma__EliminationClient<$Result.GetResult<Prisma.$EliminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groups<T extends TournamentPhase$groupsArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhase$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends TournamentPhase$matchesArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPhase$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TournamentPhase model
   */
  interface TournamentPhaseFieldRefs {
    readonly id: FieldRef<"TournamentPhase", 'Int'>
    readonly tournamentId: FieldRef<"TournamentPhase", 'Int'>
    readonly phaseType: FieldRef<"TournamentPhase", 'PhaseType'>
    readonly order: FieldRef<"TournamentPhase", 'Int'>
    readonly isCompleted: FieldRef<"TournamentPhase", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TournamentPhase findUnique
   */
  export type TournamentPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPhase to fetch.
     */
    where: TournamentPhaseWhereUniqueInput
  }

  /**
   * TournamentPhase findUniqueOrThrow
   */
  export type TournamentPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPhase to fetch.
     */
    where: TournamentPhaseWhereUniqueInput
  }

  /**
   * TournamentPhase findFirst
   */
  export type TournamentPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPhase to fetch.
     */
    where?: TournamentPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPhases to fetch.
     */
    orderBy?: TournamentPhaseOrderByWithRelationInput | TournamentPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentPhases.
     */
    cursor?: TournamentPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentPhases.
     */
    distinct?: TournamentPhaseScalarFieldEnum | TournamentPhaseScalarFieldEnum[]
  }

  /**
   * TournamentPhase findFirstOrThrow
   */
  export type TournamentPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPhase to fetch.
     */
    where?: TournamentPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPhases to fetch.
     */
    orderBy?: TournamentPhaseOrderByWithRelationInput | TournamentPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentPhases.
     */
    cursor?: TournamentPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentPhases.
     */
    distinct?: TournamentPhaseScalarFieldEnum | TournamentPhaseScalarFieldEnum[]
  }

  /**
   * TournamentPhase findMany
   */
  export type TournamentPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPhases to fetch.
     */
    where?: TournamentPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPhases to fetch.
     */
    orderBy?: TournamentPhaseOrderByWithRelationInput | TournamentPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentPhases.
     */
    cursor?: TournamentPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPhases.
     */
    skip?: number
    distinct?: TournamentPhaseScalarFieldEnum | TournamentPhaseScalarFieldEnum[]
  }

  /**
   * TournamentPhase create
   */
  export type TournamentPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentPhase.
     */
    data: XOR<TournamentPhaseCreateInput, TournamentPhaseUncheckedCreateInput>
  }

  /**
   * TournamentPhase createMany
   */
  export type TournamentPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentPhases.
     */
    data: TournamentPhaseCreateManyInput | TournamentPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentPhase createManyAndReturn
   */
  export type TournamentPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentPhases.
     */
    data: TournamentPhaseCreateManyInput | TournamentPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentPhase update
   */
  export type TournamentPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentPhase.
     */
    data: XOR<TournamentPhaseUpdateInput, TournamentPhaseUncheckedUpdateInput>
    /**
     * Choose, which TournamentPhase to update.
     */
    where: TournamentPhaseWhereUniqueInput
  }

  /**
   * TournamentPhase updateMany
   */
  export type TournamentPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentPhases.
     */
    data: XOR<TournamentPhaseUpdateManyMutationInput, TournamentPhaseUncheckedUpdateManyInput>
    /**
     * Filter which TournamentPhases to update
     */
    where?: TournamentPhaseWhereInput
    /**
     * Limit how many TournamentPhases to update.
     */
    limit?: number
  }

  /**
   * TournamentPhase updateManyAndReturn
   */
  export type TournamentPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * The data used to update TournamentPhases.
     */
    data: XOR<TournamentPhaseUpdateManyMutationInput, TournamentPhaseUncheckedUpdateManyInput>
    /**
     * Filter which TournamentPhases to update
     */
    where?: TournamentPhaseWhereInput
    /**
     * Limit how many TournamentPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentPhase upsert
   */
  export type TournamentPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentPhase to update in case it exists.
     */
    where: TournamentPhaseWhereUniqueInput
    /**
     * In case the TournamentPhase found by the `where` argument doesn't exist, create a new TournamentPhase with this data.
     */
    create: XOR<TournamentPhaseCreateInput, TournamentPhaseUncheckedCreateInput>
    /**
     * In case the TournamentPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentPhaseUpdateInput, TournamentPhaseUncheckedUpdateInput>
  }

  /**
   * TournamentPhase delete
   */
  export type TournamentPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
    /**
     * Filter which TournamentPhase to delete.
     */
    where: TournamentPhaseWhereUniqueInput
  }

  /**
   * TournamentPhase deleteMany
   */
  export type TournamentPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPhases to delete
     */
    where?: TournamentPhaseWhereInput
    /**
     * Limit how many TournamentPhases to delete.
     */
    limit?: number
  }

  /**
   * TournamentPhase.elimination
   */
  export type TournamentPhase$eliminationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elimination
     */
    select?: EliminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elimination
     */
    omit?: EliminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EliminationInclude<ExtArgs> | null
    where?: EliminationWhereInput
  }

  /**
   * TournamentPhase.groups
   */
  export type TournamentPhase$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TournamentPhase.matches
   */
  export type TournamentPhase$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TournamentPhase without action
   */
  export type TournamentPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPhase
     */
    select?: TournamentPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPhase
     */
    omit?: TournamentPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPhaseInclude<ExtArgs> | null
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
    participantId: number | null
    place: number | null
  }

  export type TournamentWinnerSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    participantId: number | null
    place: number | null
  }

  export type TournamentWinnerMinAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    participantId: number | null
    place: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentWinnerMaxAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    participantId: number | null
    place: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentWinnerCountAggregateOutputType = {
    id: number
    tournamentId: number
    participantId: number
    place: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentWinnerAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    participantId?: true
    place?: true
  }

  export type TournamentWinnerSumAggregateInputType = {
    id?: true
    tournamentId?: true
    participantId?: true
    place?: true
  }

  export type TournamentWinnerMinAggregateInputType = {
    id?: true
    tournamentId?: true
    participantId?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentWinnerMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    participantId?: true
    place?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentWinnerCountAggregateInputType = {
    id?: true
    tournamentId?: true
    participantId?: true
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
    participantId: number
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
    participantId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    participantId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    participantId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentWinner"]>

  export type TournamentWinnerSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    participantId?: boolean
    place?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentWinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "participantId" | "place" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentWinner"]>
  export type TournamentWinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type TournamentWinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type TournamentWinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $TournamentWinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentWinner"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tournamentId: number
      participantId: number
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
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly participantId: FieldRef<"TournamentWinner", 'Int'>
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


  export const EliminationScalarFieldEnum: {
    id: 'id',
    tournamentPhaseId: 'tournamentPhaseId',
    type: 'type',
    currentRound: 'currentRound',
    isOver: 'isOver',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EliminationScalarFieldEnum = (typeof EliminationScalarFieldEnum)[keyof typeof EliminationScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    tournamentPhaseId: 'tournamentPhaseId',
    eliminationId: 'eliminationId',
    tournamentGroupId: 'tournamentGroupId',
    participant1Id: 'participant1Id',
    participant2Id: 'participant2Id',
    winnerId: 'winnerId',
    nextMatchId: 'nextMatchId',
    round: 'round',
    serialNumber: 'serialNumber',
    isOver: 'isOver',
    matchType: 'matchType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    elo: 'elo',
    wins: 'wins',
    losses: 'losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const ParticipantGroupScalarFieldEnum: {
    id: 'id',
    tournamentGroupId: 'tournamentGroupId',
    participantId: 'participantId',
    wins: 'wins',
    losses: 'losses',
    points: 'points',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantGroupScalarFieldEnum = (typeof ParticipantGroupScalarFieldEnum)[keyof typeof ParticipantGroupScalarFieldEnum]


  export const ParticipantTournamentScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    tournamentId: 'tournamentId',
    wins: 'wins',
    losses: 'losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantTournamentScalarFieldEnum = (typeof ParticipantTournamentScalarFieldEnum)[keyof typeof ParticipantTournamentScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentGroupScalarFieldEnum: {
    id: 'id',
    tournamentPhaseId: 'tournamentPhaseId',
    groupNumber: 'groupNumber',
    isGroupMatchesEnded: 'isGroupMatchesEnded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentGroupScalarFieldEnum = (typeof TournamentGroupScalarFieldEnum)[keyof typeof TournamentGroupScalarFieldEnum]


  export const TournamentPhaseScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    phaseType: 'phaseType',
    order: 'order',
    isCompleted: 'isCompleted'
  };

  export type TournamentPhaseScalarFieldEnum = (typeof TournamentPhaseScalarFieldEnum)[keyof typeof TournamentPhaseScalarFieldEnum]


  export const TournamentWinnerScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    participantId: 'participantId',
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
   * Reference to a field of type 'EliminationType'
   */
  export type EnumEliminationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EliminationType'>
    


  /**
   * Reference to a field of type 'EliminationType[]'
   */
  export type ListEnumEliminationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EliminationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MatchType'
   */
  export type EnumMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchType'>
    


  /**
   * Reference to a field of type 'MatchType[]'
   */
  export type ListEnumMatchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchType[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ParticipantType'
   */
  export type EnumParticipantTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantType'>
    


  /**
   * Reference to a field of type 'ParticipantType[]'
   */
  export type ListEnumParticipantTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantType[]'>
    


  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>
    


  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>
    


  /**
   * Reference to a field of type 'PhaseType'
   */
  export type EnumPhaseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhaseType'>
    


  /**
   * Reference to a field of type 'PhaseType[]'
   */
  export type ListEnumPhaseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhaseType[]'>
    


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


  export type EliminationWhereInput = {
    AND?: EliminationWhereInput | EliminationWhereInput[]
    OR?: EliminationWhereInput[]
    NOT?: EliminationWhereInput | EliminationWhereInput[]
    id?: IntFilter<"Elimination"> | number
    tournamentPhaseId?: IntFilter<"Elimination"> | number
    type?: EnumEliminationTypeFilter<"Elimination"> | $Enums.EliminationType
    currentRound?: IntFilter<"Elimination"> | number
    isOver?: BoolFilter<"Elimination"> | boolean
    createdAt?: DateTimeFilter<"Elimination"> | Date | string
    updatedAt?: DateTimeFilter<"Elimination"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    matches?: MatchListRelationFilter
  }

  export type EliminationOrderByWithRelationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    type?: SortOrder
    currentRound?: SortOrder
    isOver?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournamentPhase?: TournamentPhaseOrderByWithRelationInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type EliminationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tournamentPhaseId?: number
    AND?: EliminationWhereInput | EliminationWhereInput[]
    OR?: EliminationWhereInput[]
    NOT?: EliminationWhereInput | EliminationWhereInput[]
    type?: EnumEliminationTypeFilter<"Elimination"> | $Enums.EliminationType
    currentRound?: IntFilter<"Elimination"> | number
    isOver?: BoolFilter<"Elimination"> | boolean
    createdAt?: DateTimeFilter<"Elimination"> | Date | string
    updatedAt?: DateTimeFilter<"Elimination"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    matches?: MatchListRelationFilter
  }, "id" | "tournamentPhaseId">

  export type EliminationOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    type?: SortOrder
    currentRound?: SortOrder
    isOver?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EliminationCountOrderByAggregateInput
    _avg?: EliminationAvgOrderByAggregateInput
    _max?: EliminationMaxOrderByAggregateInput
    _min?: EliminationMinOrderByAggregateInput
    _sum?: EliminationSumOrderByAggregateInput
  }

  export type EliminationScalarWhereWithAggregatesInput = {
    AND?: EliminationScalarWhereWithAggregatesInput | EliminationScalarWhereWithAggregatesInput[]
    OR?: EliminationScalarWhereWithAggregatesInput[]
    NOT?: EliminationScalarWhereWithAggregatesInput | EliminationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Elimination"> | number
    tournamentPhaseId?: IntWithAggregatesFilter<"Elimination"> | number
    type?: EnumEliminationTypeWithAggregatesFilter<"Elimination"> | $Enums.EliminationType
    currentRound?: IntWithAggregatesFilter<"Elimination"> | number
    isOver?: BoolWithAggregatesFilter<"Elimination"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Elimination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Elimination"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: IntFilter<"Match"> | number
    tournamentPhaseId?: IntFilter<"Match"> | number
    eliminationId?: IntNullableFilter<"Match"> | number | null
    tournamentGroupId?: IntNullableFilter<"Match"> | number | null
    participant1Id?: IntNullableFilter<"Match"> | number | null
    participant2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    round?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    matchType?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    elimination?: XOR<EliminationNullableScalarRelationFilter, EliminationWhereInput> | null
    group?: XOR<TournamentGroupNullableScalarRelationFilter, TournamentGroupWhereInput> | null
    participant1?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    participant2?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    winner?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    nextMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    prevMatches?: MatchListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrderInput | SortOrder
    tournamentGroupId?: SortOrderInput | SortOrder
    participant1Id?: SortOrderInput | SortOrder
    participant2Id?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    round?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    isOver?: SortOrder
    matchType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournamentPhase?: TournamentPhaseOrderByWithRelationInput
    elimination?: EliminationOrderByWithRelationInput
    group?: TournamentGroupOrderByWithRelationInput
    participant1?: ParticipantOrderByWithRelationInput
    participant2?: ParticipantOrderByWithRelationInput
    winner?: ParticipantOrderByWithRelationInput
    nextMatch?: MatchOrderByWithRelationInput
    prevMatches?: MatchOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tournamentGroupId_serialNumber?: MatchTournamentGroupIdSerialNumberCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    tournamentPhaseId?: IntFilter<"Match"> | number
    eliminationId?: IntNullableFilter<"Match"> | number | null
    tournamentGroupId?: IntNullableFilter<"Match"> | number | null
    participant1Id?: IntNullableFilter<"Match"> | number | null
    participant2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    round?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    matchType?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    elimination?: XOR<EliminationNullableScalarRelationFilter, EliminationWhereInput> | null
    group?: XOR<TournamentGroupNullableScalarRelationFilter, TournamentGroupWhereInput> | null
    participant1?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    participant2?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    winner?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
    nextMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    prevMatches?: MatchListRelationFilter
  }, "id" | "tournamentGroupId_serialNumber">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrderInput | SortOrder
    tournamentGroupId?: SortOrderInput | SortOrder
    participant1Id?: SortOrderInput | SortOrder
    participant2Id?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    round?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    isOver?: SortOrder
    matchType?: SortOrder
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
    tournamentPhaseId?: IntWithAggregatesFilter<"Match"> | number
    eliminationId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    tournamentGroupId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    participant1Id?: IntNullableWithAggregatesFilter<"Match"> | number | null
    participant2Id?: IntNullableWithAggregatesFilter<"Match"> | number | null
    winnerId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    nextMatchId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    round?: IntNullableWithAggregatesFilter<"Match"> | number | null
    serialNumber?: IntNullableWithAggregatesFilter<"Match"> | number | null
    isOver?: BoolWithAggregatesFilter<"Match"> | boolean
    matchType?: EnumMatchTypeWithAggregatesFilter<"Match"> | $Enums.MatchType
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: IntFilter<"Participant"> | number
    name?: StringFilter<"Participant"> | string
    type?: EnumParticipantTypeFilter<"Participant"> | $Enums.ParticipantType
    elo?: IntFilter<"Participant"> | number
    wins?: IntFilter<"Participant"> | number
    losses?: IntFilter<"Participant"> | number
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    tournaments?: ParticipantTournamentListRelationFilter
    groups?: ParticipantGroupListRelationFilter
    matchesAsP1?: MatchListRelationFilter
    matchesAsP2?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    podiums?: TournamentWinnerListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournaments?: ParticipantTournamentOrderByRelationAggregateInput
    groups?: ParticipantGroupOrderByRelationAggregateInput
    matchesAsP1?: MatchOrderByRelationAggregateInput
    matchesAsP2?: MatchOrderByRelationAggregateInput
    matchesWon?: MatchOrderByRelationAggregateInput
    podiums?: TournamentWinnerOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    type?: EnumParticipantTypeFilter<"Participant"> | $Enums.ParticipantType
    elo?: IntFilter<"Participant"> | number
    wins?: IntFilter<"Participant"> | number
    losses?: IntFilter<"Participant"> | number
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    tournaments?: ParticipantTournamentListRelationFilter
    groups?: ParticipantGroupListRelationFilter
    matchesAsP1?: MatchListRelationFilter
    matchesAsP2?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    podiums?: TournamentWinnerListRelationFilter
  }, "id" | "name">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _avg?: ParticipantAvgOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
    _sum?: ParticipantSumOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participant"> | number
    name?: StringWithAggregatesFilter<"Participant"> | string
    type?: EnumParticipantTypeWithAggregatesFilter<"Participant"> | $Enums.ParticipantType
    elo?: IntWithAggregatesFilter<"Participant"> | number
    wins?: IntWithAggregatesFilter<"Participant"> | number
    losses?: IntWithAggregatesFilter<"Participant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type ParticipantGroupWhereInput = {
    AND?: ParticipantGroupWhereInput | ParticipantGroupWhereInput[]
    OR?: ParticipantGroupWhereInput[]
    NOT?: ParticipantGroupWhereInput | ParticipantGroupWhereInput[]
    id?: IntFilter<"ParticipantGroup"> | number
    tournamentGroupId?: IntFilter<"ParticipantGroup"> | number
    participantId?: IntFilter<"ParticipantGroup"> | number
    wins?: IntFilter<"ParticipantGroup"> | number
    losses?: IntFilter<"ParticipantGroup"> | number
    points?: IntFilter<"ParticipantGroup"> | number
    createdAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
    group?: XOR<TournamentGroupScalarRelationFilter, TournamentGroupWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type ParticipantGroupOrderByWithRelationInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: TournamentGroupOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type ParticipantGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tournamentGroupId_participantId?: ParticipantGroupTournamentGroupIdParticipantIdCompoundUniqueInput
    AND?: ParticipantGroupWhereInput | ParticipantGroupWhereInput[]
    OR?: ParticipantGroupWhereInput[]
    NOT?: ParticipantGroupWhereInput | ParticipantGroupWhereInput[]
    tournamentGroupId?: IntFilter<"ParticipantGroup"> | number
    participantId?: IntFilter<"ParticipantGroup"> | number
    wins?: IntFilter<"ParticipantGroup"> | number
    losses?: IntFilter<"ParticipantGroup"> | number
    points?: IntFilter<"ParticipantGroup"> | number
    createdAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
    group?: XOR<TournamentGroupScalarRelationFilter, TournamentGroupWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "tournamentGroupId_participantId">

  export type ParticipantGroupOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantGroupCountOrderByAggregateInput
    _avg?: ParticipantGroupAvgOrderByAggregateInput
    _max?: ParticipantGroupMaxOrderByAggregateInput
    _min?: ParticipantGroupMinOrderByAggregateInput
    _sum?: ParticipantGroupSumOrderByAggregateInput
  }

  export type ParticipantGroupScalarWhereWithAggregatesInput = {
    AND?: ParticipantGroupScalarWhereWithAggregatesInput | ParticipantGroupScalarWhereWithAggregatesInput[]
    OR?: ParticipantGroupScalarWhereWithAggregatesInput[]
    NOT?: ParticipantGroupScalarWhereWithAggregatesInput | ParticipantGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    tournamentGroupId?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    participantId?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    wins?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    losses?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    points?: IntWithAggregatesFilter<"ParticipantGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParticipantGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParticipantGroup"> | Date | string
  }

  export type ParticipantTournamentWhereInput = {
    AND?: ParticipantTournamentWhereInput | ParticipantTournamentWhereInput[]
    OR?: ParticipantTournamentWhereInput[]
    NOT?: ParticipantTournamentWhereInput | ParticipantTournamentWhereInput[]
    id?: IntFilter<"ParticipantTournament"> | number
    participantId?: IntFilter<"ParticipantTournament"> | number
    tournamentId?: IntFilter<"ParticipantTournament"> | number
    wins?: IntFilter<"ParticipantTournament"> | number
    losses?: IntFilter<"ParticipantTournament"> | number
    createdAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type ParticipantTournamentOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type ParticipantTournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participantId_tournamentId?: ParticipantTournamentParticipantIdTournamentIdCompoundUniqueInput
    AND?: ParticipantTournamentWhereInput | ParticipantTournamentWhereInput[]
    OR?: ParticipantTournamentWhereInput[]
    NOT?: ParticipantTournamentWhereInput | ParticipantTournamentWhereInput[]
    participantId?: IntFilter<"ParticipantTournament"> | number
    tournamentId?: IntFilter<"ParticipantTournament"> | number
    wins?: IntFilter<"ParticipantTournament"> | number
    losses?: IntFilter<"ParticipantTournament"> | number
    createdAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "participantId_tournamentId">

  export type ParticipantTournamentOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantTournamentCountOrderByAggregateInput
    _avg?: ParticipantTournamentAvgOrderByAggregateInput
    _max?: ParticipantTournamentMaxOrderByAggregateInput
    _min?: ParticipantTournamentMinOrderByAggregateInput
    _sum?: ParticipantTournamentSumOrderByAggregateInput
  }

  export type ParticipantTournamentScalarWhereWithAggregatesInput = {
    AND?: ParticipantTournamentScalarWhereWithAggregatesInput | ParticipantTournamentScalarWhereWithAggregatesInput[]
    OR?: ParticipantTournamentScalarWhereWithAggregatesInput[]
    NOT?: ParticipantTournamentScalarWhereWithAggregatesInput | ParticipantTournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantTournament"> | number
    participantId?: IntWithAggregatesFilter<"ParticipantTournament"> | number
    tournamentId?: IntWithAggregatesFilter<"ParticipantTournament"> | number
    wins?: IntWithAggregatesFilter<"ParticipantTournament"> | number
    losses?: IntWithAggregatesFilter<"ParticipantTournament"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParticipantTournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParticipantTournament"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: IntFilter<"Tournament"> | number
    name?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    type?: EnumParticipantTypeFilter<"Tournament"> | $Enums.ParticipantType
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    phases?: TournamentPhaseListRelationFilter
    participants?: ParticipantTournamentListRelationFilter
    winners?: TournamentWinnerListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phases?: TournamentPhaseOrderByRelationAggregateInput
    participants?: ParticipantTournamentOrderByRelationAggregateInput
    winners?: TournamentWinnerOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    type?: EnumParticipantTypeFilter<"Tournament"> | $Enums.ParticipantType
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    phases?: TournamentPhaseListRelationFilter
    participants?: ParticipantTournamentListRelationFilter
    winners?: TournamentWinnerListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
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
    status?: EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus
    type?: EnumParticipantTypeWithAggregatesFilter<"Tournament"> | $Enums.ParticipantType
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type TournamentGroupWhereInput = {
    AND?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    OR?: TournamentGroupWhereInput[]
    NOT?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    id?: IntFilter<"TournamentGroup"> | number
    tournamentPhaseId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    participantGroups?: ParticipantGroupListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type TournamentGroupOrderByWithRelationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournamentPhase?: TournamentPhaseOrderByWithRelationInput
    participantGroups?: ParticipantGroupOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type TournamentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tournamentPhaseId_groupNumber?: TournamentGroupTournamentPhaseIdGroupNumberCompoundUniqueInput
    AND?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    OR?: TournamentGroupWhereInput[]
    NOT?: TournamentGroupWhereInput | TournamentGroupWhereInput[]
    tournamentPhaseId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    tournamentPhase?: XOR<TournamentPhaseScalarRelationFilter, TournamentPhaseWhereInput>
    participantGroups?: ParticipantGroupListRelationFilter
    matches?: MatchListRelationFilter
  }, "id" | "tournamentPhaseId_groupNumber">

  export type TournamentGroupOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
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
    tournamentPhaseId?: IntWithAggregatesFilter<"TournamentGroup"> | number
    groupNumber?: IntWithAggregatesFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolWithAggregatesFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentGroup"> | Date | string
  }

  export type TournamentPhaseWhereInput = {
    AND?: TournamentPhaseWhereInput | TournamentPhaseWhereInput[]
    OR?: TournamentPhaseWhereInput[]
    NOT?: TournamentPhaseWhereInput | TournamentPhaseWhereInput[]
    id?: IntFilter<"TournamentPhase"> | number
    tournamentId?: IntFilter<"TournamentPhase"> | number
    phaseType?: EnumPhaseTypeFilter<"TournamentPhase"> | $Enums.PhaseType
    order?: IntFilter<"TournamentPhase"> | number
    isCompleted?: BoolFilter<"TournamentPhase"> | boolean
    elimination?: XOR<EliminationNullableScalarRelationFilter, EliminationWhereInput> | null
    groups?: TournamentGroupListRelationFilter
    matches?: MatchListRelationFilter
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }

  export type TournamentPhaseOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    phaseType?: SortOrder
    order?: SortOrder
    isCompleted?: SortOrder
    elimination?: EliminationOrderByWithRelationInput
    groups?: TournamentGroupOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    tournament?: TournamentOrderByWithRelationInput
  }

  export type TournamentPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentPhaseWhereInput | TournamentPhaseWhereInput[]
    OR?: TournamentPhaseWhereInput[]
    NOT?: TournamentPhaseWhereInput | TournamentPhaseWhereInput[]
    tournamentId?: IntFilter<"TournamentPhase"> | number
    phaseType?: EnumPhaseTypeFilter<"TournamentPhase"> | $Enums.PhaseType
    order?: IntFilter<"TournamentPhase"> | number
    isCompleted?: BoolFilter<"TournamentPhase"> | boolean
    elimination?: XOR<EliminationNullableScalarRelationFilter, EliminationWhereInput> | null
    groups?: TournamentGroupListRelationFilter
    matches?: MatchListRelationFilter
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }, "id">

  export type TournamentPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    phaseType?: SortOrder
    order?: SortOrder
    isCompleted?: SortOrder
    _count?: TournamentPhaseCountOrderByAggregateInput
    _avg?: TournamentPhaseAvgOrderByAggregateInput
    _max?: TournamentPhaseMaxOrderByAggregateInput
    _min?: TournamentPhaseMinOrderByAggregateInput
    _sum?: TournamentPhaseSumOrderByAggregateInput
  }

  export type TournamentPhaseScalarWhereWithAggregatesInput = {
    AND?: TournamentPhaseScalarWhereWithAggregatesInput | TournamentPhaseScalarWhereWithAggregatesInput[]
    OR?: TournamentPhaseScalarWhereWithAggregatesInput[]
    NOT?: TournamentPhaseScalarWhereWithAggregatesInput | TournamentPhaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TournamentPhase"> | number
    tournamentId?: IntWithAggregatesFilter<"TournamentPhase"> | number
    phaseType?: EnumPhaseTypeWithAggregatesFilter<"TournamentPhase"> | $Enums.PhaseType
    order?: IntWithAggregatesFilter<"TournamentPhase"> | number
    isCompleted?: BoolWithAggregatesFilter<"TournamentPhase"> | boolean
  }

  export type TournamentWinnerWhereInput = {
    AND?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    OR?: TournamentWinnerWhereInput[]
    NOT?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    id?: IntFilter<"TournamentWinner"> | number
    tournamentId?: IntFilter<"TournamentWinner"> | number
    participantId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type TournamentWinnerOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type TournamentWinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tournamentId_place?: TournamentWinnerTournamentIdPlaceCompoundUniqueInput
    AND?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    OR?: TournamentWinnerWhereInput[]
    NOT?: TournamentWinnerWhereInput | TournamentWinnerWhereInput[]
    tournamentId?: IntFilter<"TournamentWinner"> | number
    participantId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "tournamentId_place">

  export type TournamentWinnerOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
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
    participantId?: IntWithAggregatesFilter<"TournamentWinner"> | number
    place?: IntWithAggregatesFilter<"TournamentWinner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentWinner"> | Date | string
  }

  export type EliminationCreateInput = {
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutEliminationInput
    matches?: MatchCreateNestedManyWithoutEliminationInput
  }

  export type EliminationUncheckedCreateInput = {
    id?: number
    tournamentPhaseId: number
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutEliminationInput
  }

  export type EliminationUpdateInput = {
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutEliminationNestedInput
    matches?: MatchUpdateManyWithoutEliminationNestedInput
  }

  export type EliminationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutEliminationNestedInput
  }

  export type EliminationCreateManyInput = {
    id?: number
    tournamentPhaseId: number
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EliminationUpdateManyMutationInput = {
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EliminationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUpdateInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupCreateInput = {
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group: TournamentGroupCreateNestedOneWithoutParticipantGroupsInput
    participant: ParticipantCreateNestedOneWithoutGroupsInput
  }

  export type ParticipantGroupUncheckedCreateInput = {
    id?: number
    tournamentGroupId: number
    participantId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupUpdateInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: TournamentGroupUpdateOneRequiredWithoutParticipantGroupsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type ParticipantGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupCreateManyInput = {
    id?: number
    tournamentGroupId: number
    participantId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupUpdateManyMutationInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentCreateInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutTournamentsInput
  }

  export type ParticipantTournamentUncheckedCreateInput = {
    id?: number
    participantId: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantTournamentUpdateInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutTournamentsNestedInput
  }

  export type ParticipantTournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentCreateManyInput = {
    id?: number
    participantId: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantTournamentUpdateManyMutationInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseCreateNestedManyWithoutTournamentInput
    participants?: ParticipantTournamentCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseUncheckedCreateNestedManyWithoutTournamentInput
    participants?: ParticipantTournamentUncheckedCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUpdateManyWithoutTournamentNestedInput
    participants?: ParticipantTournamentUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUncheckedUpdateManyWithoutTournamentNestedInput
    participants?: ParticipantTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupCreateInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutGroupsInput
    participantGroups?: ParticipantGroupCreateNestedManyWithoutGroupInput
    matches?: MatchCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupUncheckedCreateInput = {
    id?: number
    tournamentPhaseId: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participantGroups?: ParticipantGroupUncheckedCreateNestedManyWithoutGroupInput
    matches?: MatchUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupUpdateInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutGroupsNestedInput
    participantGroups?: ParticipantGroupUpdateManyWithoutGroupNestedInput
    matches?: MatchUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantGroups?: ParticipantGroupUncheckedUpdateManyWithoutGroupNestedInput
    matches?: MatchUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupCreateManyInput = {
    id?: number
    tournamentPhaseId: number
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
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPhaseCreateInput = {
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchCreateNestedManyWithoutTournamentPhaseInput
    tournament: TournamentCreateNestedOneWithoutPhasesInput
  }

  export type TournamentPhaseUncheckedCreateInput = {
    id?: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationUncheckedCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseUpdateInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUpdateManyWithoutTournamentPhaseNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type TournamentPhaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUncheckedUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type TournamentPhaseCreateManyInput = {
    id?: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
  }

  export type TournamentPhaseUpdateManyMutationInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TournamentPhaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TournamentWinnerCreateInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutWinnersInput
    participant: ParticipantCreateNestedOneWithoutPodiumsInput
  }

  export type TournamentWinnerUncheckedCreateInput = {
    id?: number
    tournamentId: number
    participantId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerUpdateInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutWinnersNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutPodiumsNestedInput
  }

  export type TournamentWinnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerCreateManyInput = {
    id?: number
    tournamentId: number
    participantId: number
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
    participantId?: IntFieldUpdateOperationsInput | number
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

  export type EnumEliminationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeFilter<$PrismaModel> | $Enums.EliminationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TournamentPhaseScalarRelationFilter = {
    is?: TournamentPhaseWhereInput
    isNot?: TournamentPhaseWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EliminationCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    type?: SortOrder
    currentRound?: SortOrder
    isOver?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EliminationAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    currentRound?: SortOrder
  }

  export type EliminationMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    type?: SortOrder
    currentRound?: SortOrder
    isOver?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EliminationMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    type?: SortOrder
    currentRound?: SortOrder
    isOver?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EliminationSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    currentRound?: SortOrder
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

  export type EnumEliminationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EliminationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEliminationTypeFilter<$PrismaModel>
    _max?: NestedEnumEliminationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeFilter<$PrismaModel> | $Enums.MatchType
  }

  export type EliminationNullableScalarRelationFilter = {
    is?: EliminationWhereInput | null
    isNot?: EliminationWhereInput | null
  }

  export type TournamentGroupNullableScalarRelationFilter = {
    is?: TournamentGroupWhereInput | null
    isNot?: TournamentGroupWhereInput | null
  }

  export type ParticipantNullableScalarRelationFilter = {
    is?: ParticipantWhereInput | null
    isNot?: ParticipantWhereInput | null
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchTournamentGroupIdSerialNumberCompoundUniqueInput = {
    tournamentGroupId: number
    serialNumber: number
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrder
    tournamentGroupId?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    round?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    matchType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrder
    tournamentGroupId?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    round?: SortOrder
    serialNumber?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrder
    tournamentGroupId?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    round?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    matchType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrder
    tournamentGroupId?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    round?: SortOrder
    serialNumber?: SortOrder
    isOver?: SortOrder
    matchType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    eliminationId?: SortOrder
    tournamentGroupId?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    round?: SortOrder
    serialNumber?: SortOrder
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

  export type EnumMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumMatchTypeFilter<$PrismaModel>
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

  export type EnumParticipantTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeFilter<$PrismaModel> | $Enums.ParticipantType
  }

  export type ParticipantTournamentListRelationFilter = {
    every?: ParticipantTournamentWhereInput
    some?: ParticipantTournamentWhereInput
    none?: ParticipantTournamentWhereInput
  }

  export type ParticipantGroupListRelationFilter = {
    every?: ParticipantGroupWhereInput
    some?: ParticipantGroupWhereInput
    none?: ParticipantGroupWhereInput
  }

  export type TournamentWinnerListRelationFilter = {
    every?: TournamentWinnerWhereInput
    some?: TournamentWinnerWhereInput
    none?: TournamentWinnerWhereInput
  }

  export type ParticipantTournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentWinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    elo?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
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

  export type EnumParticipantTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantTypeFilter<$PrismaModel>
    _max?: NestedEnumParticipantTypeFilter<$PrismaModel>
  }

  export type TournamentGroupScalarRelationFilter = {
    is?: TournamentGroupWhereInput
    isNot?: TournamentGroupWhereInput
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type ParticipantGroupTournamentGroupIdParticipantIdCompoundUniqueInput = {
    tournamentGroupId: number
    participantId: number
  }

  export type ParticipantGroupCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
  }

  export type ParticipantGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantGroupMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantGroupSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentGroupId?: SortOrder
    participantId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type ParticipantTournamentParticipantIdTournamentIdCompoundUniqueInput = {
    participantId: number
    tournamentId: number
  }

  export type ParticipantTournamentCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantTournamentAvgOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type ParticipantTournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantTournamentMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantTournamentSumOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    tournamentId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type TournamentPhaseListRelationFilter = {
    every?: TournamentPhaseWhereInput
    some?: TournamentPhaseWhereInput
    none?: TournamentPhaseWhereInput
  }

  export type TournamentPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type TournamentGroupTournamentPhaseIdGroupNumberCompoundUniqueInput = {
    tournamentPhaseId: number
    groupNumber: number
  }

  export type TournamentGroupCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
  }

  export type TournamentGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
    isGroupMatchesEnded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentGroupSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentPhaseId?: SortOrder
    groupNumber?: SortOrder
  }

  export type EnumPhaseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseType | EnumPhaseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseTypeFilter<$PrismaModel> | $Enums.PhaseType
  }

  export type TournamentGroupListRelationFilter = {
    every?: TournamentGroupWhereInput
    some?: TournamentGroupWhereInput
    none?: TournamentGroupWhereInput
  }

  export type TournamentGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    phaseType?: SortOrder
    order?: SortOrder
    isCompleted?: SortOrder
  }

  export type TournamentPhaseAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    order?: SortOrder
  }

  export type TournamentPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    phaseType?: SortOrder
    order?: SortOrder
    isCompleted?: SortOrder
  }

  export type TournamentPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    phaseType?: SortOrder
    order?: SortOrder
    isCompleted?: SortOrder
  }

  export type TournamentPhaseSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    order?: SortOrder
  }

  export type EnumPhaseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseType | EnumPhaseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseTypeWithAggregatesFilter<$PrismaModel> | $Enums.PhaseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhaseTypeFilter<$PrismaModel>
    _max?: NestedEnumPhaseTypeFilter<$PrismaModel>
  }

  export type TournamentWinnerTournamentIdPlaceCompoundUniqueInput = {
    tournamentId: number
    place: number
  }

  export type TournamentWinnerCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
  }

  export type TournamentWinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentWinnerSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    participantId?: SortOrder
    place?: SortOrder
  }

  export type TournamentPhaseCreateNestedOneWithoutEliminationInput = {
    create?: XOR<TournamentPhaseCreateWithoutEliminationInput, TournamentPhaseUncheckedCreateWithoutEliminationInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutEliminationInput
    connect?: TournamentPhaseWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutEliminationInput = {
    create?: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput> | MatchCreateWithoutEliminationInput[] | MatchUncheckedCreateWithoutEliminationInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEliminationInput | MatchCreateOrConnectWithoutEliminationInput[]
    createMany?: MatchCreateManyEliminationInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutEliminationInput = {
    create?: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput> | MatchCreateWithoutEliminationInput[] | MatchUncheckedCreateWithoutEliminationInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEliminationInput | MatchCreateOrConnectWithoutEliminationInput[]
    createMany?: MatchCreateManyEliminationInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type EnumEliminationTypeFieldUpdateOperationsInput = {
    set?: $Enums.EliminationType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TournamentPhaseUpdateOneRequiredWithoutEliminationNestedInput = {
    create?: XOR<TournamentPhaseCreateWithoutEliminationInput, TournamentPhaseUncheckedCreateWithoutEliminationInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutEliminationInput
    upsert?: TournamentPhaseUpsertWithoutEliminationInput
    connect?: TournamentPhaseWhereUniqueInput
    update?: XOR<XOR<TournamentPhaseUpdateToOneWithWhereWithoutEliminationInput, TournamentPhaseUpdateWithoutEliminationInput>, TournamentPhaseUncheckedUpdateWithoutEliminationInput>
  }

  export type MatchUpdateManyWithoutEliminationNestedInput = {
    create?: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput> | MatchCreateWithoutEliminationInput[] | MatchUncheckedCreateWithoutEliminationInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEliminationInput | MatchCreateOrConnectWithoutEliminationInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutEliminationInput | MatchUpsertWithWhereUniqueWithoutEliminationInput[]
    createMany?: MatchCreateManyEliminationInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutEliminationInput | MatchUpdateWithWhereUniqueWithoutEliminationInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutEliminationInput | MatchUpdateManyWithWhereWithoutEliminationInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutEliminationNestedInput = {
    create?: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput> | MatchCreateWithoutEliminationInput[] | MatchUncheckedCreateWithoutEliminationInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEliminationInput | MatchCreateOrConnectWithoutEliminationInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutEliminationInput | MatchUpsertWithWhereUniqueWithoutEliminationInput[]
    createMany?: MatchCreateManyEliminationInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutEliminationInput | MatchUpdateWithWhereUniqueWithoutEliminationInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutEliminationInput | MatchUpdateManyWithWhereWithoutEliminationInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentPhaseCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TournamentPhaseCreateWithoutMatchesInput, TournamentPhaseUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutMatchesInput
    connect?: TournamentPhaseWhereUniqueInput
  }

  export type EliminationCreateNestedOneWithoutMatchesInput = {
    create?: XOR<EliminationCreateWithoutMatchesInput, EliminationUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutMatchesInput
    connect?: EliminationWhereUniqueInput
  }

  export type TournamentGroupCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TournamentGroupCreateWithoutMatchesInput, TournamentGroupUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutMatchesInput
    connect?: TournamentGroupWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutMatchesAsP1Input = {
    create?: XOR<ParticipantCreateWithoutMatchesAsP1Input, ParticipantUncheckedCreateWithoutMatchesAsP1Input>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesAsP1Input
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutMatchesAsP2Input = {
    create?: XOR<ParticipantCreateWithoutMatchesAsP2Input, ParticipantUncheckedCreateWithoutMatchesAsP2Input>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesAsP2Input
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutMatchesWonInput = {
    create?: XOR<ParticipantCreateWithoutMatchesWonInput, ParticipantUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesWonInput
    connect?: ParticipantWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutPrevMatchesInput = {
    create?: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPrevMatchesInput
    connect?: MatchWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutNextMatchInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutNextMatchInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMatchTypeFieldUpdateOperationsInput = {
    set?: $Enums.MatchType
  }

  export type TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<TournamentPhaseCreateWithoutMatchesInput, TournamentPhaseUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutMatchesInput
    upsert?: TournamentPhaseUpsertWithoutMatchesInput
    connect?: TournamentPhaseWhereUniqueInput
    update?: XOR<XOR<TournamentPhaseUpdateToOneWithWhereWithoutMatchesInput, TournamentPhaseUpdateWithoutMatchesInput>, TournamentPhaseUncheckedUpdateWithoutMatchesInput>
  }

  export type EliminationUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<EliminationCreateWithoutMatchesInput, EliminationUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutMatchesInput
    upsert?: EliminationUpsertWithoutMatchesInput
    disconnect?: EliminationWhereInput | boolean
    delete?: EliminationWhereInput | boolean
    connect?: EliminationWhereUniqueInput
    update?: XOR<XOR<EliminationUpdateToOneWithWhereWithoutMatchesInput, EliminationUpdateWithoutMatchesInput>, EliminationUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentGroupUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutMatchesInput, TournamentGroupUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutMatchesInput
    upsert?: TournamentGroupUpsertWithoutMatchesInput
    disconnect?: TournamentGroupWhereInput | boolean
    delete?: TournamentGroupWhereInput | boolean
    connect?: TournamentGroupWhereUniqueInput
    update?: XOR<XOR<TournamentGroupUpdateToOneWithWhereWithoutMatchesInput, TournamentGroupUpdateWithoutMatchesInput>, TournamentGroupUncheckedUpdateWithoutMatchesInput>
  }

  export type ParticipantUpdateOneWithoutMatchesAsP1NestedInput = {
    create?: XOR<ParticipantCreateWithoutMatchesAsP1Input, ParticipantUncheckedCreateWithoutMatchesAsP1Input>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesAsP1Input
    upsert?: ParticipantUpsertWithoutMatchesAsP1Input
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutMatchesAsP1Input, ParticipantUpdateWithoutMatchesAsP1Input>, ParticipantUncheckedUpdateWithoutMatchesAsP1Input>
  }

  export type ParticipantUpdateOneWithoutMatchesAsP2NestedInput = {
    create?: XOR<ParticipantCreateWithoutMatchesAsP2Input, ParticipantUncheckedCreateWithoutMatchesAsP2Input>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesAsP2Input
    upsert?: ParticipantUpsertWithoutMatchesAsP2Input
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutMatchesAsP2Input, ParticipantUpdateWithoutMatchesAsP2Input>, ParticipantUncheckedUpdateWithoutMatchesAsP2Input>
  }

  export type ParticipantUpdateOneWithoutMatchesWonNestedInput = {
    create?: XOR<ParticipantCreateWithoutMatchesWonInput, ParticipantUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMatchesWonInput
    upsert?: ParticipantUpsertWithoutMatchesWonInput
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutMatchesWonInput, ParticipantUpdateWithoutMatchesWonInput>, ParticipantUncheckedUpdateWithoutMatchesWonInput>
  }

  export type MatchUpdateOneWithoutPrevMatchesNestedInput = {
    create?: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPrevMatchesInput
    upsert?: MatchUpsertWithoutPrevMatchesInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutPrevMatchesInput, MatchUpdateWithoutPrevMatchesInput>, MatchUncheckedUpdateWithoutPrevMatchesInput>
  }

  export type MatchUpdateManyWithoutNextMatchNestedInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutNextMatchInput | MatchUpsertWithWhereUniqueWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutNextMatchInput | MatchUpdateWithWhereUniqueWithoutNextMatchInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutNextMatchInput | MatchUpdateManyWithWhereWithoutNextMatchInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutNextMatchNestedInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutNextMatchInput | MatchUpsertWithWhereUniqueWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutNextMatchInput | MatchUpdateWithWhereUniqueWithoutNextMatchInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutNextMatchInput | MatchUpdateManyWithWhereWithoutNextMatchInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ParticipantTournamentCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput> | ParticipantTournamentCreateWithoutParticipantInput[] | ParticipantTournamentUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutParticipantInput | ParticipantTournamentCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantTournamentCreateManyParticipantInputEnvelope
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
  }

  export type ParticipantGroupCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput> | ParticipantGroupCreateWithoutParticipantInput[] | ParticipantGroupUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutParticipantInput | ParticipantGroupCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantGroupCreateManyParticipantInputEnvelope
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutParticipant1Input = {
    create?: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input> | MatchCreateWithoutParticipant1Input[] | MatchUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant1Input | MatchCreateOrConnectWithoutParticipant1Input[]
    createMany?: MatchCreateManyParticipant1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutParticipant2Input = {
    create?: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input> | MatchCreateWithoutParticipant2Input[] | MatchUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant2Input | MatchCreateOrConnectWithoutParticipant2Input[]
    createMany?: MatchCreateManyParticipant2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentWinnerCreateNestedManyWithoutParticipantInput = {
    create?: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput> | TournamentWinnerCreateWithoutParticipantInput[] | TournamentWinnerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutParticipantInput | TournamentWinnerCreateOrConnectWithoutParticipantInput[]
    createMany?: TournamentWinnerCreateManyParticipantInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput> | ParticipantTournamentCreateWithoutParticipantInput[] | ParticipantTournamentUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutParticipantInput | ParticipantTournamentCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantTournamentCreateManyParticipantInputEnvelope
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
  }

  export type ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput> | ParticipantGroupCreateWithoutParticipantInput[] | ParticipantGroupUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutParticipantInput | ParticipantGroupCreateOrConnectWithoutParticipantInput[]
    createMany?: ParticipantGroupCreateManyParticipantInputEnvelope
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutParticipant1Input = {
    create?: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input> | MatchCreateWithoutParticipant1Input[] | MatchUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant1Input | MatchCreateOrConnectWithoutParticipant1Input[]
    createMany?: MatchCreateManyParticipant1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutParticipant2Input = {
    create?: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input> | MatchCreateWithoutParticipant2Input[] | MatchUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant2Input | MatchCreateOrConnectWithoutParticipant2Input[]
    createMany?: MatchCreateManyParticipant2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput> | TournamentWinnerCreateWithoutParticipantInput[] | TournamentWinnerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutParticipantInput | TournamentWinnerCreateOrConnectWithoutParticipantInput[]
    createMany?: TournamentWinnerCreateManyParticipantInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumParticipantTypeFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantType
  }

  export type ParticipantTournamentUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput> | ParticipantTournamentCreateWithoutParticipantInput[] | ParticipantTournamentUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutParticipantInput | ParticipantTournamentCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantTournamentUpsertWithWhereUniqueWithoutParticipantInput | ParticipantTournamentUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantTournamentCreateManyParticipantInputEnvelope
    set?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    disconnect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    delete?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    update?: ParticipantTournamentUpdateWithWhereUniqueWithoutParticipantInput | ParticipantTournamentUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantTournamentUpdateManyWithWhereWithoutParticipantInput | ParticipantTournamentUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
  }

  export type ParticipantGroupUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput> | ParticipantGroupCreateWithoutParticipantInput[] | ParticipantGroupUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutParticipantInput | ParticipantGroupCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantGroupUpsertWithWhereUniqueWithoutParticipantInput | ParticipantGroupUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantGroupCreateManyParticipantInputEnvelope
    set?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    disconnect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    delete?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    update?: ParticipantGroupUpdateWithWhereUniqueWithoutParticipantInput | ParticipantGroupUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantGroupUpdateManyWithWhereWithoutParticipantInput | ParticipantGroupUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutParticipant1NestedInput = {
    create?: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input> | MatchCreateWithoutParticipant1Input[] | MatchUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant1Input | MatchCreateOrConnectWithoutParticipant1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutParticipant1Input | MatchUpsertWithWhereUniqueWithoutParticipant1Input[]
    createMany?: MatchCreateManyParticipant1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutParticipant1Input | MatchUpdateWithWhereUniqueWithoutParticipant1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutParticipant1Input | MatchUpdateManyWithWhereWithoutParticipant1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutParticipant2NestedInput = {
    create?: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input> | MatchCreateWithoutParticipant2Input[] | MatchUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant2Input | MatchCreateOrConnectWithoutParticipant2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutParticipant2Input | MatchUpsertWithWhereUniqueWithoutParticipant2Input[]
    createMany?: MatchCreateManyParticipant2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutParticipant2Input | MatchUpdateWithWhereUniqueWithoutParticipant2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutParticipant2Input | MatchUpdateManyWithWhereWithoutParticipant2Input[]
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

  export type TournamentWinnerUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput> | TournamentWinnerCreateWithoutParticipantInput[] | TournamentWinnerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutParticipantInput | TournamentWinnerCreateOrConnectWithoutParticipantInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutParticipantInput | TournamentWinnerUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: TournamentWinnerCreateManyParticipantInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutParticipantInput | TournamentWinnerUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutParticipantInput | TournamentWinnerUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput> | ParticipantTournamentCreateWithoutParticipantInput[] | ParticipantTournamentUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutParticipantInput | ParticipantTournamentCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantTournamentUpsertWithWhereUniqueWithoutParticipantInput | ParticipantTournamentUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantTournamentCreateManyParticipantInputEnvelope
    set?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    disconnect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    delete?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    update?: ParticipantTournamentUpdateWithWhereUniqueWithoutParticipantInput | ParticipantTournamentUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantTournamentUpdateManyWithWhereWithoutParticipantInput | ParticipantTournamentUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
  }

  export type ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput> | ParticipantGroupCreateWithoutParticipantInput[] | ParticipantGroupUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutParticipantInput | ParticipantGroupCreateOrConnectWithoutParticipantInput[]
    upsert?: ParticipantGroupUpsertWithWhereUniqueWithoutParticipantInput | ParticipantGroupUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ParticipantGroupCreateManyParticipantInputEnvelope
    set?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    disconnect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    delete?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    update?: ParticipantGroupUpdateWithWhereUniqueWithoutParticipantInput | ParticipantGroupUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ParticipantGroupUpdateManyWithWhereWithoutParticipantInput | ParticipantGroupUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutParticipant1NestedInput = {
    create?: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input> | MatchCreateWithoutParticipant1Input[] | MatchUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant1Input | MatchCreateOrConnectWithoutParticipant1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutParticipant1Input | MatchUpsertWithWhereUniqueWithoutParticipant1Input[]
    createMany?: MatchCreateManyParticipant1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutParticipant1Input | MatchUpdateWithWhereUniqueWithoutParticipant1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutParticipant1Input | MatchUpdateManyWithWhereWithoutParticipant1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutParticipant2NestedInput = {
    create?: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input> | MatchCreateWithoutParticipant2Input[] | MatchUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutParticipant2Input | MatchCreateOrConnectWithoutParticipant2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutParticipant2Input | MatchUpsertWithWhereUniqueWithoutParticipant2Input[]
    createMany?: MatchCreateManyParticipant2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutParticipant2Input | MatchUpdateWithWhereUniqueWithoutParticipant2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutParticipant2Input | MatchUpdateManyWithWhereWithoutParticipant2Input[]
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

  export type TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput> | TournamentWinnerCreateWithoutParticipantInput[] | TournamentWinnerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutParticipantInput | TournamentWinnerCreateOrConnectWithoutParticipantInput[]
    upsert?: TournamentWinnerUpsertWithWhereUniqueWithoutParticipantInput | TournamentWinnerUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: TournamentWinnerCreateManyParticipantInputEnvelope
    set?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    disconnect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    delete?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
    update?: TournamentWinnerUpdateWithWhereUniqueWithoutParticipantInput | TournamentWinnerUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: TournamentWinnerUpdateManyWithWhereWithoutParticipantInput | TournamentWinnerUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
  }

  export type TournamentGroupCreateNestedOneWithoutParticipantGroupsInput = {
    create?: XOR<TournamentGroupCreateWithoutParticipantGroupsInput, TournamentGroupUncheckedCreateWithoutParticipantGroupsInput>
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutParticipantGroupsInput
    connect?: TournamentGroupWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutGroupsInput = {
    create?: XOR<ParticipantCreateWithoutGroupsInput, ParticipantUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type TournamentGroupUpdateOneRequiredWithoutParticipantGroupsNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutParticipantGroupsInput, TournamentGroupUncheckedCreateWithoutParticipantGroupsInput>
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutParticipantGroupsInput
    upsert?: TournamentGroupUpsertWithoutParticipantGroupsInput
    connect?: TournamentGroupWhereUniqueInput
    update?: XOR<XOR<TournamentGroupUpdateToOneWithWhereWithoutParticipantGroupsInput, TournamentGroupUpdateWithoutParticipantGroupsInput>, TournamentGroupUncheckedUpdateWithoutParticipantGroupsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<ParticipantCreateWithoutGroupsInput, ParticipantUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupsInput
    upsert?: ParticipantUpsertWithoutGroupsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutGroupsInput, ParticipantUpdateWithoutGroupsInput>, ParticipantUncheckedUpdateWithoutGroupsInput>
  }

  export type TournamentCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<TournamentCreateWithoutParticipantsInput, TournamentUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutParticipantsInput
    connect?: TournamentWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutTournamentsInput = {
    create?: XOR<ParticipantCreateWithoutTournamentsInput, ParticipantUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTournamentsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<TournamentCreateWithoutParticipantsInput, TournamentUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutParticipantsInput
    upsert?: TournamentUpsertWithoutParticipantsInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutParticipantsInput, TournamentUpdateWithoutParticipantsInput>, TournamentUncheckedUpdateWithoutParticipantsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutTournamentsNestedInput = {
    create?: XOR<ParticipantCreateWithoutTournamentsInput, ParticipantUncheckedCreateWithoutTournamentsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTournamentsInput
    upsert?: ParticipantUpsertWithoutTournamentsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutTournamentsInput, ParticipantUpdateWithoutTournamentsInput>, ParticipantUncheckedUpdateWithoutTournamentsInput>
  }

  export type TournamentPhaseCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput> | TournamentPhaseCreateWithoutTournamentInput[] | TournamentPhaseUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutTournamentInput | TournamentPhaseCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentPhaseCreateManyTournamentInputEnvelope
    connect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
  }

  export type ParticipantTournamentCreateNestedManyWithoutTournamentInput = {
    create?: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput> | ParticipantTournamentCreateWithoutTournamentInput[] | ParticipantTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutTournamentInput | ParticipantTournamentCreateOrConnectWithoutTournamentInput[]
    createMany?: ParticipantTournamentCreateManyTournamentInputEnvelope
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
  }

  export type TournamentWinnerCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type TournamentPhaseUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput> | TournamentPhaseCreateWithoutTournamentInput[] | TournamentPhaseUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutTournamentInput | TournamentPhaseCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentPhaseCreateManyTournamentInputEnvelope
    connect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
  }

  export type ParticipantTournamentUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput> | ParticipantTournamentCreateWithoutTournamentInput[] | ParticipantTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutTournamentInput | ParticipantTournamentCreateOrConnectWithoutTournamentInput[]
    createMany?: ParticipantTournamentCreateManyTournamentInputEnvelope
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
  }

  export type TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentWinnerCreateWithoutTournamentInput, TournamentWinnerUncheckedCreateWithoutTournamentInput> | TournamentWinnerCreateWithoutTournamentInput[] | TournamentWinnerUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentWinnerCreateOrConnectWithoutTournamentInput | TournamentWinnerCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentWinnerCreateManyTournamentInputEnvelope
    connect?: TournamentWinnerWhereUniqueInput | TournamentWinnerWhereUniqueInput[]
  }

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus
  }

  export type TournamentPhaseUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput> | TournamentPhaseCreateWithoutTournamentInput[] | TournamentPhaseUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutTournamentInput | TournamentPhaseCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentPhaseUpsertWithWhereUniqueWithoutTournamentInput | TournamentPhaseUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentPhaseCreateManyTournamentInputEnvelope
    set?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    disconnect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    delete?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    connect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    update?: TournamentPhaseUpdateWithWhereUniqueWithoutTournamentInput | TournamentPhaseUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentPhaseUpdateManyWithWhereWithoutTournamentInput | TournamentPhaseUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentPhaseScalarWhereInput | TournamentPhaseScalarWhereInput[]
  }

  export type ParticipantTournamentUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput> | ParticipantTournamentCreateWithoutTournamentInput[] | ParticipantTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutTournamentInput | ParticipantTournamentCreateOrConnectWithoutTournamentInput[]
    upsert?: ParticipantTournamentUpsertWithWhereUniqueWithoutTournamentInput | ParticipantTournamentUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: ParticipantTournamentCreateManyTournamentInputEnvelope
    set?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    disconnect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    delete?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    update?: ParticipantTournamentUpdateWithWhereUniqueWithoutTournamentInput | ParticipantTournamentUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: ParticipantTournamentUpdateManyWithWhereWithoutTournamentInput | ParticipantTournamentUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
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

  export type TournamentPhaseUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput> | TournamentPhaseCreateWithoutTournamentInput[] | TournamentPhaseUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutTournamentInput | TournamentPhaseCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentPhaseUpsertWithWhereUniqueWithoutTournamentInput | TournamentPhaseUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentPhaseCreateManyTournamentInputEnvelope
    set?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    disconnect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    delete?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    connect?: TournamentPhaseWhereUniqueInput | TournamentPhaseWhereUniqueInput[]
    update?: TournamentPhaseUpdateWithWhereUniqueWithoutTournamentInput | TournamentPhaseUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentPhaseUpdateManyWithWhereWithoutTournamentInput | TournamentPhaseUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentPhaseScalarWhereInput | TournamentPhaseScalarWhereInput[]
  }

  export type ParticipantTournamentUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput> | ParticipantTournamentCreateWithoutTournamentInput[] | ParticipantTournamentUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: ParticipantTournamentCreateOrConnectWithoutTournamentInput | ParticipantTournamentCreateOrConnectWithoutTournamentInput[]
    upsert?: ParticipantTournamentUpsertWithWhereUniqueWithoutTournamentInput | ParticipantTournamentUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: ParticipantTournamentCreateManyTournamentInputEnvelope
    set?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    disconnect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    delete?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    connect?: ParticipantTournamentWhereUniqueInput | ParticipantTournamentWhereUniqueInput[]
    update?: ParticipantTournamentUpdateWithWhereUniqueWithoutTournamentInput | ParticipantTournamentUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: ParticipantTournamentUpdateManyWithWhereWithoutTournamentInput | ParticipantTournamentUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
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

  export type TournamentPhaseCreateNestedOneWithoutGroupsInput = {
    create?: XOR<TournamentPhaseCreateWithoutGroupsInput, TournamentPhaseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutGroupsInput
    connect?: TournamentPhaseWhereUniqueInput
  }

  export type ParticipantGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput> | ParticipantGroupCreateWithoutGroupInput[] | ParticipantGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutGroupInput | ParticipantGroupCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantGroupCreateManyGroupInputEnvelope
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutGroupInput = {
    create?: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput> | MatchCreateWithoutGroupInput[] | MatchUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutGroupInput | MatchCreateOrConnectWithoutGroupInput[]
    createMany?: MatchCreateManyGroupInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ParticipantGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput> | ParticipantGroupCreateWithoutGroupInput[] | ParticipantGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutGroupInput | ParticipantGroupCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantGroupCreateManyGroupInputEnvelope
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput> | MatchCreateWithoutGroupInput[] | MatchUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutGroupInput | MatchCreateOrConnectWithoutGroupInput[]
    createMany?: MatchCreateManyGroupInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentPhaseUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<TournamentPhaseCreateWithoutGroupsInput, TournamentPhaseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: TournamentPhaseCreateOrConnectWithoutGroupsInput
    upsert?: TournamentPhaseUpsertWithoutGroupsInput
    connect?: TournamentPhaseWhereUniqueInput
    update?: XOR<XOR<TournamentPhaseUpdateToOneWithWhereWithoutGroupsInput, TournamentPhaseUpdateWithoutGroupsInput>, TournamentPhaseUncheckedUpdateWithoutGroupsInput>
  }

  export type ParticipantGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput> | ParticipantGroupCreateWithoutGroupInput[] | ParticipantGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutGroupInput | ParticipantGroupCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantGroupUpsertWithWhereUniqueWithoutGroupInput | ParticipantGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantGroupCreateManyGroupInputEnvelope
    set?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    disconnect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    delete?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    update?: ParticipantGroupUpdateWithWhereUniqueWithoutGroupInput | ParticipantGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantGroupUpdateManyWithWhereWithoutGroupInput | ParticipantGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput> | MatchCreateWithoutGroupInput[] | MatchUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutGroupInput | MatchCreateOrConnectWithoutGroupInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutGroupInput | MatchUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MatchCreateManyGroupInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutGroupInput | MatchUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutGroupInput | MatchUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ParticipantGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput> | ParticipantGroupCreateWithoutGroupInput[] | ParticipantGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantGroupCreateOrConnectWithoutGroupInput | ParticipantGroupCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantGroupUpsertWithWhereUniqueWithoutGroupInput | ParticipantGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantGroupCreateManyGroupInputEnvelope
    set?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    disconnect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    delete?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    connect?: ParticipantGroupWhereUniqueInput | ParticipantGroupWhereUniqueInput[]
    update?: ParticipantGroupUpdateWithWhereUniqueWithoutGroupInput | ParticipantGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantGroupUpdateManyWithWhereWithoutGroupInput | ParticipantGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput> | MatchCreateWithoutGroupInput[] | MatchUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutGroupInput | MatchCreateOrConnectWithoutGroupInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutGroupInput | MatchUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MatchCreateManyGroupInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutGroupInput | MatchUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutGroupInput | MatchUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type EliminationCreateNestedOneWithoutTournamentPhaseInput = {
    create?: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutTournamentPhaseInput
    connect?: EliminationWhereUniqueInput
  }

  export type TournamentGroupCreateNestedManyWithoutTournamentPhaseInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput> | TournamentGroupCreateWithoutTournamentPhaseInput[] | TournamentGroupUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentPhaseInput | TournamentGroupCreateOrConnectWithoutTournamentPhaseInput[]
    createMany?: TournamentGroupCreateManyTournamentPhaseInputEnvelope
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentPhaseInput = {
    create?: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput> | MatchCreateWithoutTournamentPhaseInput[] | MatchUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentPhaseInput | MatchCreateOrConnectWithoutTournamentPhaseInput[]
    createMany?: MatchCreateManyTournamentPhaseInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentCreateNestedOneWithoutPhasesInput = {
    create?: XOR<TournamentCreateWithoutPhasesInput, TournamentUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPhasesInput
    connect?: TournamentWhereUniqueInput
  }

  export type EliminationUncheckedCreateNestedOneWithoutTournamentPhaseInput = {
    create?: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutTournamentPhaseInput
    connect?: EliminationWhereUniqueInput
  }

  export type TournamentGroupUncheckedCreateNestedManyWithoutTournamentPhaseInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput> | TournamentGroupCreateWithoutTournamentPhaseInput[] | TournamentGroupUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentPhaseInput | TournamentGroupCreateOrConnectWithoutTournamentPhaseInput[]
    createMany?: TournamentGroupCreateManyTournamentPhaseInputEnvelope
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentPhaseInput = {
    create?: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput> | MatchCreateWithoutTournamentPhaseInput[] | MatchUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentPhaseInput | MatchCreateOrConnectWithoutTournamentPhaseInput[]
    createMany?: MatchCreateManyTournamentPhaseInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type EnumPhaseTypeFieldUpdateOperationsInput = {
    set?: $Enums.PhaseType
  }

  export type EliminationUpdateOneWithoutTournamentPhaseNestedInput = {
    create?: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutTournamentPhaseInput
    upsert?: EliminationUpsertWithoutTournamentPhaseInput
    disconnect?: EliminationWhereInput | boolean
    delete?: EliminationWhereInput | boolean
    connect?: EliminationWhereUniqueInput
    update?: XOR<XOR<EliminationUpdateToOneWithWhereWithoutTournamentPhaseInput, EliminationUpdateWithoutTournamentPhaseInput>, EliminationUncheckedUpdateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupUpdateManyWithoutTournamentPhaseNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput> | TournamentGroupCreateWithoutTournamentPhaseInput[] | TournamentGroupUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentPhaseInput | TournamentGroupCreateOrConnectWithoutTournamentPhaseInput[]
    upsert?: TournamentGroupUpsertWithWhereUniqueWithoutTournamentPhaseInput | TournamentGroupUpsertWithWhereUniqueWithoutTournamentPhaseInput[]
    createMany?: TournamentGroupCreateManyTournamentPhaseInputEnvelope
    set?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    disconnect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    delete?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    update?: TournamentGroupUpdateWithWhereUniqueWithoutTournamentPhaseInput | TournamentGroupUpdateWithWhereUniqueWithoutTournamentPhaseInput[]
    updateMany?: TournamentGroupUpdateManyWithWhereWithoutTournamentPhaseInput | TournamentGroupUpdateManyWithWhereWithoutTournamentPhaseInput[]
    deleteMany?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTournamentPhaseNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput> | MatchCreateWithoutTournamentPhaseInput[] | MatchUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentPhaseInput | MatchCreateOrConnectWithoutTournamentPhaseInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentPhaseInput | MatchUpsertWithWhereUniqueWithoutTournamentPhaseInput[]
    createMany?: MatchCreateManyTournamentPhaseInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentPhaseInput | MatchUpdateWithWhereUniqueWithoutTournamentPhaseInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentPhaseInput | MatchUpdateManyWithWhereWithoutTournamentPhaseInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<TournamentCreateWithoutPhasesInput, TournamentUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutPhasesInput
    upsert?: TournamentUpsertWithoutPhasesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutPhasesInput, TournamentUpdateWithoutPhasesInput>, TournamentUncheckedUpdateWithoutPhasesInput>
  }

  export type EliminationUncheckedUpdateOneWithoutTournamentPhaseNestedInput = {
    create?: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
    connectOrCreate?: EliminationCreateOrConnectWithoutTournamentPhaseInput
    upsert?: EliminationUpsertWithoutTournamentPhaseInput
    disconnect?: EliminationWhereInput | boolean
    delete?: EliminationWhereInput | boolean
    connect?: EliminationWhereUniqueInput
    update?: XOR<XOR<EliminationUpdateToOneWithWhereWithoutTournamentPhaseInput, EliminationUpdateWithoutTournamentPhaseInput>, EliminationUncheckedUpdateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseNestedInput = {
    create?: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput> | TournamentGroupCreateWithoutTournamentPhaseInput[] | TournamentGroupUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: TournamentGroupCreateOrConnectWithoutTournamentPhaseInput | TournamentGroupCreateOrConnectWithoutTournamentPhaseInput[]
    upsert?: TournamentGroupUpsertWithWhereUniqueWithoutTournamentPhaseInput | TournamentGroupUpsertWithWhereUniqueWithoutTournamentPhaseInput[]
    createMany?: TournamentGroupCreateManyTournamentPhaseInputEnvelope
    set?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    disconnect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    delete?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    connect?: TournamentGroupWhereUniqueInput | TournamentGroupWhereUniqueInput[]
    update?: TournamentGroupUpdateWithWhereUniqueWithoutTournamentPhaseInput | TournamentGroupUpdateWithWhereUniqueWithoutTournamentPhaseInput[]
    updateMany?: TournamentGroupUpdateManyWithWhereWithoutTournamentPhaseInput | TournamentGroupUpdateManyWithWhereWithoutTournamentPhaseInput[]
    deleteMany?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentPhaseNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput> | MatchCreateWithoutTournamentPhaseInput[] | MatchUncheckedCreateWithoutTournamentPhaseInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentPhaseInput | MatchCreateOrConnectWithoutTournamentPhaseInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentPhaseInput | MatchUpsertWithWhereUniqueWithoutTournamentPhaseInput[]
    createMany?: MatchCreateManyTournamentPhaseInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentPhaseInput | MatchUpdateWithWhereUniqueWithoutTournamentPhaseInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentPhaseInput | MatchUpdateManyWithWhereWithoutTournamentPhaseInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutWinnersInput = {
    create?: XOR<TournamentCreateWithoutWinnersInput, TournamentUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutWinnersInput
    connect?: TournamentWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutPodiumsInput = {
    create?: XOR<ParticipantCreateWithoutPodiumsInput, ParticipantUncheckedCreateWithoutPodiumsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutPodiumsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<TournamentCreateWithoutWinnersInput, TournamentUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutWinnersInput
    upsert?: TournamentUpsertWithoutWinnersInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutWinnersInput, TournamentUpdateWithoutWinnersInput>, TournamentUncheckedUpdateWithoutWinnersInput>
  }

  export type ParticipantUpdateOneRequiredWithoutPodiumsNestedInput = {
    create?: XOR<ParticipantCreateWithoutPodiumsInput, ParticipantUncheckedCreateWithoutPodiumsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutPodiumsInput
    upsert?: ParticipantUpsertWithoutPodiumsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutPodiumsInput, ParticipantUpdateWithoutPodiumsInput>, ParticipantUncheckedUpdateWithoutPodiumsInput>
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

  export type NestedEnumEliminationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeFilter<$PrismaModel> | $Enums.EliminationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EliminationType | EnumEliminationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EliminationType[] | ListEnumEliminationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEliminationTypeWithAggregatesFilter<$PrismaModel> | $Enums.EliminationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEliminationTypeFilter<$PrismaModel>
    _max?: NestedEnumEliminationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumMatchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeFilter<$PrismaModel> | $Enums.MatchType
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

  export type NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchType | EnumMatchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchType[] | ListEnumMatchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTypeFilter<$PrismaModel>
    _max?: NestedEnumMatchTypeFilter<$PrismaModel>
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

  export type NestedEnumParticipantTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeFilter<$PrismaModel> | $Enums.ParticipantType
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

  export type NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantTypeFilter<$PrismaModel>
    _max?: NestedEnumParticipantTypeFilter<$PrismaModel>
  }

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPhaseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseType | EnumPhaseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseTypeFilter<$PrismaModel> | $Enums.PhaseType
  }

  export type NestedEnumPhaseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhaseType | EnumPhaseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhaseType[] | ListEnumPhaseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPhaseTypeWithAggregatesFilter<$PrismaModel> | $Enums.PhaseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhaseTypeFilter<$PrismaModel>
    _max?: NestedEnumPhaseTypeFilter<$PrismaModel>
  }

  export type TournamentPhaseCreateWithoutEliminationInput = {
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    groups?: TournamentGroupCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchCreateNestedManyWithoutTournamentPhaseInput
    tournament: TournamentCreateNestedOneWithoutPhasesInput
  }

  export type TournamentPhaseUncheckedCreateWithoutEliminationInput = {
    id?: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    groups?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseCreateOrConnectWithoutEliminationInput = {
    where: TournamentPhaseWhereUniqueInput
    create: XOR<TournamentPhaseCreateWithoutEliminationInput, TournamentPhaseUncheckedCreateWithoutEliminationInput>
  }

  export type MatchCreateWithoutEliminationInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutEliminationInput = {
    id?: number
    tournamentPhaseId: number
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutEliminationInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput>
  }

  export type MatchCreateManyEliminationInputEnvelope = {
    data: MatchCreateManyEliminationInput | MatchCreateManyEliminationInput[]
    skipDuplicates?: boolean
  }

  export type TournamentPhaseUpsertWithoutEliminationInput = {
    update: XOR<TournamentPhaseUpdateWithoutEliminationInput, TournamentPhaseUncheckedUpdateWithoutEliminationInput>
    create: XOR<TournamentPhaseCreateWithoutEliminationInput, TournamentPhaseUncheckedCreateWithoutEliminationInput>
    where?: TournamentPhaseWhereInput
  }

  export type TournamentPhaseUpdateToOneWithWhereWithoutEliminationInput = {
    where?: TournamentPhaseWhereInput
    data: XOR<TournamentPhaseUpdateWithoutEliminationInput, TournamentPhaseUncheckedUpdateWithoutEliminationInput>
  }

  export type TournamentPhaseUpdateWithoutEliminationInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    groups?: TournamentGroupUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUpdateManyWithoutTournamentPhaseNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type TournamentPhaseUncheckedUpdateWithoutEliminationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    groups?: TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type MatchUpsertWithWhereUniqueWithoutEliminationInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutEliminationInput, MatchUncheckedUpdateWithoutEliminationInput>
    create: XOR<MatchCreateWithoutEliminationInput, MatchUncheckedCreateWithoutEliminationInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutEliminationInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutEliminationInput, MatchUncheckedUpdateWithoutEliminationInput>
  }

  export type MatchUpdateManyWithWhereWithoutEliminationInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutEliminationInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: IntFilter<"Match"> | number
    tournamentPhaseId?: IntFilter<"Match"> | number
    eliminationId?: IntNullableFilter<"Match"> | number | null
    tournamentGroupId?: IntNullableFilter<"Match"> | number | null
    participant1Id?: IntNullableFilter<"Match"> | number | null
    participant2Id?: IntNullableFilter<"Match"> | number | null
    winnerId?: IntNullableFilter<"Match"> | number | null
    nextMatchId?: IntNullableFilter<"Match"> | number | null
    round?: IntNullableFilter<"Match"> | number | null
    serialNumber?: IntNullableFilter<"Match"> | number | null
    isOver?: BoolFilter<"Match"> | boolean
    matchType?: EnumMatchTypeFilter<"Match"> | $Enums.MatchType
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type TournamentPhaseCreateWithoutMatchesInput = {
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupCreateNestedManyWithoutTournamentPhaseInput
    tournament: TournamentCreateNestedOneWithoutPhasesInput
  }

  export type TournamentPhaseUncheckedCreateWithoutMatchesInput = {
    id?: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationUncheckedCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseCreateOrConnectWithoutMatchesInput = {
    where: TournamentPhaseWhereUniqueInput
    create: XOR<TournamentPhaseCreateWithoutMatchesInput, TournamentPhaseUncheckedCreateWithoutMatchesInput>
  }

  export type EliminationCreateWithoutMatchesInput = {
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutEliminationInput
  }

  export type EliminationUncheckedCreateWithoutMatchesInput = {
    id?: number
    tournamentPhaseId: number
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EliminationCreateOrConnectWithoutMatchesInput = {
    where: EliminationWhereUniqueInput
    create: XOR<EliminationCreateWithoutMatchesInput, EliminationUncheckedCreateWithoutMatchesInput>
  }

  export type TournamentGroupCreateWithoutMatchesInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutGroupsInput
    participantGroups?: ParticipantGroupCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupUncheckedCreateWithoutMatchesInput = {
    id?: number
    tournamentPhaseId: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participantGroups?: ParticipantGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupCreateOrConnectWithoutMatchesInput = {
    where: TournamentGroupWhereUniqueInput
    create: XOR<TournamentGroupCreateWithoutMatchesInput, TournamentGroupUncheckedCreateWithoutMatchesInput>
  }

  export type ParticipantCreateWithoutMatchesAsP1Input = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutMatchesAsP1Input = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutMatchesAsP1Input = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutMatchesAsP1Input, ParticipantUncheckedCreateWithoutMatchesAsP1Input>
  }

  export type ParticipantCreateWithoutMatchesAsP2Input = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutMatchesAsP2Input = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutMatchesAsP2Input = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutMatchesAsP2Input, ParticipantUncheckedCreateWithoutMatchesAsP2Input>
  }

  export type ParticipantCreateWithoutMatchesWonInput = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutMatchesWonInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutMatchesWonInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutMatchesWonInput, ParticipantUncheckedCreateWithoutMatchesWonInput>
  }

  export type MatchCreateWithoutPrevMatchesInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
  }

  export type MatchUncheckedCreateWithoutPrevMatchesInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPrevMatchesInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
  }

  export type MatchCreateWithoutNextMatchInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutNextMatchInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput>
  }

  export type MatchCreateManyNextMatchInputEnvelope = {
    data: MatchCreateManyNextMatchInput | MatchCreateManyNextMatchInput[]
    skipDuplicates?: boolean
  }

  export type TournamentPhaseUpsertWithoutMatchesInput = {
    update: XOR<TournamentPhaseUpdateWithoutMatchesInput, TournamentPhaseUncheckedUpdateWithoutMatchesInput>
    create: XOR<TournamentPhaseCreateWithoutMatchesInput, TournamentPhaseUncheckedCreateWithoutMatchesInput>
    where?: TournamentPhaseWhereInput
  }

  export type TournamentPhaseUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentPhaseWhereInput
    data: XOR<TournamentPhaseUpdateWithoutMatchesInput, TournamentPhaseUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentPhaseUpdateWithoutMatchesInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUpdateManyWithoutTournamentPhaseNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type TournamentPhaseUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUncheckedUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type EliminationUpsertWithoutMatchesInput = {
    update: XOR<EliminationUpdateWithoutMatchesInput, EliminationUncheckedUpdateWithoutMatchesInput>
    create: XOR<EliminationCreateWithoutMatchesInput, EliminationUncheckedCreateWithoutMatchesInput>
    where?: EliminationWhereInput
  }

  export type EliminationUpdateToOneWithWhereWithoutMatchesInput = {
    where?: EliminationWhereInput
    data: XOR<EliminationUpdateWithoutMatchesInput, EliminationUncheckedUpdateWithoutMatchesInput>
  }

  export type EliminationUpdateWithoutMatchesInput = {
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutEliminationNestedInput
  }

  export type EliminationUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupUpsertWithoutMatchesInput = {
    update: XOR<TournamentGroupUpdateWithoutMatchesInput, TournamentGroupUncheckedUpdateWithoutMatchesInput>
    create: XOR<TournamentGroupCreateWithoutMatchesInput, TournamentGroupUncheckedCreateWithoutMatchesInput>
    where?: TournamentGroupWhereInput
  }

  export type TournamentGroupUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentGroupWhereInput
    data: XOR<TournamentGroupUpdateWithoutMatchesInput, TournamentGroupUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentGroupUpdateWithoutMatchesInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutGroupsNestedInput
    participantGroups?: ParticipantGroupUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantGroups?: ParticipantGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ParticipantUpsertWithoutMatchesAsP1Input = {
    update: XOR<ParticipantUpdateWithoutMatchesAsP1Input, ParticipantUncheckedUpdateWithoutMatchesAsP1Input>
    create: XOR<ParticipantCreateWithoutMatchesAsP1Input, ParticipantUncheckedCreateWithoutMatchesAsP1Input>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutMatchesAsP1Input = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutMatchesAsP1Input, ParticipantUncheckedUpdateWithoutMatchesAsP1Input>
  }

  export type ParticipantUpdateWithoutMatchesAsP1Input = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutMatchesAsP1Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUpsertWithoutMatchesAsP2Input = {
    update: XOR<ParticipantUpdateWithoutMatchesAsP2Input, ParticipantUncheckedUpdateWithoutMatchesAsP2Input>
    create: XOR<ParticipantCreateWithoutMatchesAsP2Input, ParticipantUncheckedCreateWithoutMatchesAsP2Input>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutMatchesAsP2Input = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutMatchesAsP2Input, ParticipantUncheckedUpdateWithoutMatchesAsP2Input>
  }

  export type ParticipantUpdateWithoutMatchesAsP2Input = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutMatchesAsP2Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUpsertWithoutMatchesWonInput = {
    update: XOR<ParticipantUpdateWithoutMatchesWonInput, ParticipantUncheckedUpdateWithoutMatchesWonInput>
    create: XOR<ParticipantCreateWithoutMatchesWonInput, ParticipantUncheckedCreateWithoutMatchesWonInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutMatchesWonInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutMatchesWonInput, ParticipantUncheckedUpdateWithoutMatchesWonInput>
  }

  export type ParticipantUpdateWithoutMatchesWonInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutMatchesWonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type MatchUpsertWithoutPrevMatchesInput = {
    update: XOR<MatchUpdateWithoutPrevMatchesInput, MatchUncheckedUpdateWithoutPrevMatchesInput>
    create: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutPrevMatchesInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutPrevMatchesInput, MatchUncheckedUpdateWithoutPrevMatchesInput>
  }

  export type MatchUpdateWithoutPrevMatchesInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutPrevMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutNextMatchInput, MatchUncheckedUpdateWithoutNextMatchInput>
    create: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutNextMatchInput, MatchUncheckedUpdateWithoutNextMatchInput>
  }

  export type MatchUpdateManyWithWhereWithoutNextMatchInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutNextMatchInput>
  }

  export type ParticipantTournamentCreateWithoutParticipantInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantTournamentUncheckedCreateWithoutParticipantInput = {
    id?: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantTournamentCreateOrConnectWithoutParticipantInput = {
    where: ParticipantTournamentWhereUniqueInput
    create: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantTournamentCreateManyParticipantInputEnvelope = {
    data: ParticipantTournamentCreateManyParticipantInput | ParticipantTournamentCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantGroupCreateWithoutParticipantInput = {
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group: TournamentGroupCreateNestedOneWithoutParticipantGroupsInput
  }

  export type ParticipantGroupUncheckedCreateWithoutParticipantInput = {
    id?: number
    tournamentGroupId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupCreateOrConnectWithoutParticipantInput = {
    where: ParticipantGroupWhereUniqueInput
    create: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantGroupCreateManyParticipantInputEnvelope = {
    data: ParticipantGroupCreateManyParticipantInput | ParticipantGroupCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutParticipant1Input = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutParticipant1Input = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutParticipant1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input>
  }

  export type MatchCreateManyParticipant1InputEnvelope = {
    data: MatchCreateManyParticipant1Input | MatchCreateManyParticipant1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutParticipant2Input = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutParticipant2Input = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutParticipant2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input>
  }

  export type MatchCreateManyParticipant2InputEnvelope = {
    data: MatchCreateManyParticipant2Input | MatchCreateManyParticipant2Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type TournamentWinnerCreateWithoutParticipantInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutWinnersInput
  }

  export type TournamentWinnerUncheckedCreateWithoutParticipantInput = {
    id?: number
    tournamentId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerCreateOrConnectWithoutParticipantInput = {
    where: TournamentWinnerWhereUniqueInput
    create: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput>
  }

  export type TournamentWinnerCreateManyParticipantInputEnvelope = {
    data: TournamentWinnerCreateManyParticipantInput | TournamentWinnerCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantTournamentUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantTournamentWhereUniqueInput
    update: XOR<ParticipantTournamentUpdateWithoutParticipantInput, ParticipantTournamentUncheckedUpdateWithoutParticipantInput>
    create: XOR<ParticipantTournamentCreateWithoutParticipantInput, ParticipantTournamentUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantTournamentUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantTournamentWhereUniqueInput
    data: XOR<ParticipantTournamentUpdateWithoutParticipantInput, ParticipantTournamentUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantTournamentUpdateManyWithWhereWithoutParticipantInput = {
    where: ParticipantTournamentScalarWhereInput
    data: XOR<ParticipantTournamentUpdateManyMutationInput, ParticipantTournamentUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ParticipantTournamentScalarWhereInput = {
    AND?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
    OR?: ParticipantTournamentScalarWhereInput[]
    NOT?: ParticipantTournamentScalarWhereInput | ParticipantTournamentScalarWhereInput[]
    id?: IntFilter<"ParticipantTournament"> | number
    participantId?: IntFilter<"ParticipantTournament"> | number
    tournamentId?: IntFilter<"ParticipantTournament"> | number
    wins?: IntFilter<"ParticipantTournament"> | number
    losses?: IntFilter<"ParticipantTournament"> | number
    createdAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantTournament"> | Date | string
  }

  export type ParticipantGroupUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantGroupWhereUniqueInput
    update: XOR<ParticipantGroupUpdateWithoutParticipantInput, ParticipantGroupUncheckedUpdateWithoutParticipantInput>
    create: XOR<ParticipantGroupCreateWithoutParticipantInput, ParticipantGroupUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantGroupUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ParticipantGroupWhereUniqueInput
    data: XOR<ParticipantGroupUpdateWithoutParticipantInput, ParticipantGroupUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantGroupUpdateManyWithWhereWithoutParticipantInput = {
    where: ParticipantGroupScalarWhereInput
    data: XOR<ParticipantGroupUpdateManyMutationInput, ParticipantGroupUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ParticipantGroupScalarWhereInput = {
    AND?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
    OR?: ParticipantGroupScalarWhereInput[]
    NOT?: ParticipantGroupScalarWhereInput | ParticipantGroupScalarWhereInput[]
    id?: IntFilter<"ParticipantGroup"> | number
    tournamentGroupId?: IntFilter<"ParticipantGroup"> | number
    participantId?: IntFilter<"ParticipantGroup"> | number
    wins?: IntFilter<"ParticipantGroup"> | number
    losses?: IntFilter<"ParticipantGroup"> | number
    points?: IntFilter<"ParticipantGroup"> | number
    createdAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ParticipantGroup"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutParticipant1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutParticipant1Input, MatchUncheckedUpdateWithoutParticipant1Input>
    create: XOR<MatchCreateWithoutParticipant1Input, MatchUncheckedCreateWithoutParticipant1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutParticipant1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutParticipant1Input, MatchUncheckedUpdateWithoutParticipant1Input>
  }

  export type MatchUpdateManyWithWhereWithoutParticipant1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutParticipant1Input>
  }

  export type MatchUpsertWithWhereUniqueWithoutParticipant2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutParticipant2Input, MatchUncheckedUpdateWithoutParticipant2Input>
    create: XOR<MatchCreateWithoutParticipant2Input, MatchUncheckedCreateWithoutParticipant2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutParticipant2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutParticipant2Input, MatchUncheckedUpdateWithoutParticipant2Input>
  }

  export type MatchUpdateManyWithWhereWithoutParticipant2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutParticipant2Input>
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

  export type TournamentWinnerUpsertWithWhereUniqueWithoutParticipantInput = {
    where: TournamentWinnerWhereUniqueInput
    update: XOR<TournamentWinnerUpdateWithoutParticipantInput, TournamentWinnerUncheckedUpdateWithoutParticipantInput>
    create: XOR<TournamentWinnerCreateWithoutParticipantInput, TournamentWinnerUncheckedCreateWithoutParticipantInput>
  }

  export type TournamentWinnerUpdateWithWhereUniqueWithoutParticipantInput = {
    where: TournamentWinnerWhereUniqueInput
    data: XOR<TournamentWinnerUpdateWithoutParticipantInput, TournamentWinnerUncheckedUpdateWithoutParticipantInput>
  }

  export type TournamentWinnerUpdateManyWithWhereWithoutParticipantInput = {
    where: TournamentWinnerScalarWhereInput
    data: XOR<TournamentWinnerUpdateManyMutationInput, TournamentWinnerUncheckedUpdateManyWithoutParticipantInput>
  }

  export type TournamentWinnerScalarWhereInput = {
    AND?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
    OR?: TournamentWinnerScalarWhereInput[]
    NOT?: TournamentWinnerScalarWhereInput | TournamentWinnerScalarWhereInput[]
    id?: IntFilter<"TournamentWinner"> | number
    tournamentId?: IntFilter<"TournamentWinner"> | number
    participantId?: IntFilter<"TournamentWinner"> | number
    place?: IntFilter<"TournamentWinner"> | number
    createdAt?: DateTimeFilter<"TournamentWinner"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentWinner"> | Date | string
  }

  export type TournamentGroupCreateWithoutParticipantGroupsInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutGroupsInput
    matches?: MatchCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupUncheckedCreateWithoutParticipantGroupsInput = {
    id?: number
    tournamentPhaseId: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupCreateOrConnectWithoutParticipantGroupsInput = {
    where: TournamentGroupWhereUniqueInput
    create: XOR<TournamentGroupCreateWithoutParticipantGroupsInput, TournamentGroupUncheckedCreateWithoutParticipantGroupsInput>
  }

  export type ParticipantCreateWithoutGroupsInput = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutGroupsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGroupsInput, ParticipantUncheckedCreateWithoutGroupsInput>
  }

  export type TournamentGroupUpsertWithoutParticipantGroupsInput = {
    update: XOR<TournamentGroupUpdateWithoutParticipantGroupsInput, TournamentGroupUncheckedUpdateWithoutParticipantGroupsInput>
    create: XOR<TournamentGroupCreateWithoutParticipantGroupsInput, TournamentGroupUncheckedCreateWithoutParticipantGroupsInput>
    where?: TournamentGroupWhereInput
  }

  export type TournamentGroupUpdateToOneWithWhereWithoutParticipantGroupsInput = {
    where?: TournamentGroupWhereInput
    data: XOR<TournamentGroupUpdateWithoutParticipantGroupsInput, TournamentGroupUncheckedUpdateWithoutParticipantGroupsInput>
  }

  export type TournamentGroupUpdateWithoutParticipantGroupsInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutGroupsNestedInput
    matches?: MatchUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateWithoutParticipantGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ParticipantUpsertWithoutGroupsInput = {
    update: XOR<ParticipantUpdateWithoutGroupsInput, ParticipantUncheckedUpdateWithoutGroupsInput>
    create: XOR<ParticipantCreateWithoutGroupsInput, ParticipantUncheckedCreateWithoutGroupsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutGroupsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutGroupsInput, ParticipantUncheckedUpdateWithoutGroupsInput>
  }

  export type ParticipantUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type TournamentCreateWithoutParticipantsInput = {
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseUncheckedCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutParticipantsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutParticipantsInput, TournamentUncheckedCreateWithoutParticipantsInput>
  }

  export type ParticipantCreateWithoutTournamentsInput = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutTournamentsInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    podiums?: TournamentWinnerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutTournamentsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutTournamentsInput, ParticipantUncheckedCreateWithoutTournamentsInput>
  }

  export type TournamentUpsertWithoutParticipantsInput = {
    update: XOR<TournamentUpdateWithoutParticipantsInput, TournamentUncheckedUpdateWithoutParticipantsInput>
    create: XOR<TournamentCreateWithoutParticipantsInput, TournamentUncheckedCreateWithoutParticipantsInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutParticipantsInput, TournamentUncheckedUpdateWithoutParticipantsInput>
  }

  export type TournamentUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUncheckedUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type ParticipantUpsertWithoutTournamentsInput = {
    update: XOR<ParticipantUpdateWithoutTournamentsInput, ParticipantUncheckedUpdateWithoutTournamentsInput>
    create: XOR<ParticipantCreateWithoutTournamentsInput, ParticipantUncheckedCreateWithoutTournamentsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutTournamentsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutTournamentsInput, ParticipantUncheckedUpdateWithoutTournamentsInput>
  }

  export type ParticipantUpdateWithoutTournamentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutTournamentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    podiums?: TournamentWinnerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type TournamentPhaseCreateWithoutTournamentInput = {
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseUncheckedCreateWithoutTournamentInput = {
    id?: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationUncheckedCreateNestedOneWithoutTournamentPhaseInput
    groups?: TournamentGroupUncheckedCreateNestedManyWithoutTournamentPhaseInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseCreateOrConnectWithoutTournamentInput = {
    where: TournamentPhaseWhereUniqueInput
    create: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentPhaseCreateManyTournamentInputEnvelope = {
    data: TournamentPhaseCreateManyTournamentInput | TournamentPhaseCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantTournamentCreateWithoutTournamentInput = {
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutTournamentsInput
  }

  export type ParticipantTournamentUncheckedCreateWithoutTournamentInput = {
    id?: number
    participantId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantTournamentCreateOrConnectWithoutTournamentInput = {
    where: ParticipantTournamentWhereUniqueInput
    create: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput>
  }

  export type ParticipantTournamentCreateManyTournamentInputEnvelope = {
    data: ParticipantTournamentCreateManyTournamentInput | ParticipantTournamentCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TournamentWinnerCreateWithoutTournamentInput = {
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutPodiumsInput
  }

  export type TournamentWinnerUncheckedCreateWithoutTournamentInput = {
    id?: number
    participantId: number
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

  export type TournamentPhaseUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentPhaseWhereUniqueInput
    update: XOR<TournamentPhaseUpdateWithoutTournamentInput, TournamentPhaseUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentPhaseCreateWithoutTournamentInput, TournamentPhaseUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentPhaseUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentPhaseWhereUniqueInput
    data: XOR<TournamentPhaseUpdateWithoutTournamentInput, TournamentPhaseUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentPhaseUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentPhaseScalarWhereInput
    data: XOR<TournamentPhaseUpdateManyMutationInput, TournamentPhaseUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentPhaseScalarWhereInput = {
    AND?: TournamentPhaseScalarWhereInput | TournamentPhaseScalarWhereInput[]
    OR?: TournamentPhaseScalarWhereInput[]
    NOT?: TournamentPhaseScalarWhereInput | TournamentPhaseScalarWhereInput[]
    id?: IntFilter<"TournamentPhase"> | number
    tournamentId?: IntFilter<"TournamentPhase"> | number
    phaseType?: EnumPhaseTypeFilter<"TournamentPhase"> | $Enums.PhaseType
    order?: IntFilter<"TournamentPhase"> | number
    isCompleted?: BoolFilter<"TournamentPhase"> | boolean
  }

  export type ParticipantTournamentUpsertWithWhereUniqueWithoutTournamentInput = {
    where: ParticipantTournamentWhereUniqueInput
    update: XOR<ParticipantTournamentUpdateWithoutTournamentInput, ParticipantTournamentUncheckedUpdateWithoutTournamentInput>
    create: XOR<ParticipantTournamentCreateWithoutTournamentInput, ParticipantTournamentUncheckedCreateWithoutTournamentInput>
  }

  export type ParticipantTournamentUpdateWithWhereUniqueWithoutTournamentInput = {
    where: ParticipantTournamentWhereUniqueInput
    data: XOR<ParticipantTournamentUpdateWithoutTournamentInput, ParticipantTournamentUncheckedUpdateWithoutTournamentInput>
  }

  export type ParticipantTournamentUpdateManyWithWhereWithoutTournamentInput = {
    where: ParticipantTournamentScalarWhereInput
    data: XOR<ParticipantTournamentUpdateManyMutationInput, ParticipantTournamentUncheckedUpdateManyWithoutTournamentInput>
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

  export type TournamentPhaseCreateWithoutGroupsInput = {
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationCreateNestedOneWithoutTournamentPhaseInput
    matches?: MatchCreateNestedManyWithoutTournamentPhaseInput
    tournament: TournamentCreateNestedOneWithoutPhasesInput
  }

  export type TournamentPhaseUncheckedCreateWithoutGroupsInput = {
    id?: number
    tournamentId: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
    elimination?: EliminationUncheckedCreateNestedOneWithoutTournamentPhaseInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentPhaseInput
  }

  export type TournamentPhaseCreateOrConnectWithoutGroupsInput = {
    where: TournamentPhaseWhereUniqueInput
    create: XOR<TournamentPhaseCreateWithoutGroupsInput, TournamentPhaseUncheckedCreateWithoutGroupsInput>
  }

  export type ParticipantGroupCreateWithoutGroupInput = {
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutGroupsInput
  }

  export type ParticipantGroupUncheckedCreateWithoutGroupInput = {
    id?: number
    participantId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupCreateOrConnectWithoutGroupInput = {
    where: ParticipantGroupWhereUniqueInput
    create: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantGroupCreateManyGroupInputEnvelope = {
    data: ParticipantGroupCreateManyGroupInput | ParticipantGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutGroupInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    tournamentPhase: TournamentPhaseCreateNestedOneWithoutMatchesInput
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutGroupInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutGroupInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput>
  }

  export type MatchCreateManyGroupInputEnvelope = {
    data: MatchCreateManyGroupInput | MatchCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TournamentPhaseUpsertWithoutGroupsInput = {
    update: XOR<TournamentPhaseUpdateWithoutGroupsInput, TournamentPhaseUncheckedUpdateWithoutGroupsInput>
    create: XOR<TournamentPhaseCreateWithoutGroupsInput, TournamentPhaseUncheckedCreateWithoutGroupsInput>
    where?: TournamentPhaseWhereInput
  }

  export type TournamentPhaseUpdateToOneWithWhereWithoutGroupsInput = {
    where?: TournamentPhaseWhereInput
    data: XOR<TournamentPhaseUpdateWithoutGroupsInput, TournamentPhaseUncheckedUpdateWithoutGroupsInput>
  }

  export type TournamentPhaseUpdateWithoutGroupsInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUpdateOneWithoutTournamentPhaseNestedInput
    matches?: MatchUpdateManyWithoutTournamentPhaseNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type TournamentPhaseUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUncheckedUpdateOneWithoutTournamentPhaseNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type ParticipantGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: ParticipantGroupWhereUniqueInput
    update: XOR<ParticipantGroupUpdateWithoutGroupInput, ParticipantGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<ParticipantGroupCreateWithoutGroupInput, ParticipantGroupUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: ParticipantGroupWhereUniqueInput
    data: XOR<ParticipantGroupUpdateWithoutGroupInput, ParticipantGroupUncheckedUpdateWithoutGroupInput>
  }

  export type ParticipantGroupUpdateManyWithWhereWithoutGroupInput = {
    where: ParticipantGroupScalarWhereInput
    data: XOR<ParticipantGroupUpdateManyMutationInput, ParticipantGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutGroupInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutGroupInput, MatchUncheckedUpdateWithoutGroupInput>
    create: XOR<MatchCreateWithoutGroupInput, MatchUncheckedCreateWithoutGroupInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutGroupInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutGroupInput, MatchUncheckedUpdateWithoutGroupInput>
  }

  export type MatchUpdateManyWithWhereWithoutGroupInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutGroupInput>
  }

  export type EliminationCreateWithoutTournamentPhaseInput = {
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchCreateNestedManyWithoutEliminationInput
  }

  export type EliminationUncheckedCreateWithoutTournamentPhaseInput = {
    id?: number
    type?: $Enums.EliminationType
    currentRound?: number
    isOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutEliminationInput
  }

  export type EliminationCreateOrConnectWithoutTournamentPhaseInput = {
    where: EliminationWhereUniqueInput
    create: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupCreateWithoutTournamentPhaseInput = {
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participantGroups?: ParticipantGroupCreateNestedManyWithoutGroupInput
    matches?: MatchCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupUncheckedCreateWithoutTournamentPhaseInput = {
    id?: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participantGroups?: ParticipantGroupUncheckedCreateNestedManyWithoutGroupInput
    matches?: MatchUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TournamentGroupCreateOrConnectWithoutTournamentPhaseInput = {
    where: TournamentGroupWhereUniqueInput
    create: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupCreateManyTournamentPhaseInputEnvelope = {
    data: TournamentGroupCreateManyTournamentPhaseInput | TournamentGroupCreateManyTournamentPhaseInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTournamentPhaseInput = {
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    elimination?: EliminationCreateNestedOneWithoutMatchesInput
    group?: TournamentGroupCreateNestedOneWithoutMatchesInput
    participant1?: ParticipantCreateNestedOneWithoutMatchesAsP1Input
    participant2?: ParticipantCreateNestedOneWithoutMatchesAsP2Input
    winner?: ParticipantCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutTournamentPhaseInput = {
    id?: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutTournamentPhaseInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput>
  }

  export type MatchCreateManyTournamentPhaseInputEnvelope = {
    data: MatchCreateManyTournamentPhaseInput | MatchCreateManyTournamentPhaseInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutPhasesInput = {
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantTournamentCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutPhasesInput = {
    id?: number
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantTournamentUncheckedCreateNestedManyWithoutTournamentInput
    winners?: TournamentWinnerUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutPhasesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutPhasesInput, TournamentUncheckedCreateWithoutPhasesInput>
  }

  export type EliminationUpsertWithoutTournamentPhaseInput = {
    update: XOR<EliminationUpdateWithoutTournamentPhaseInput, EliminationUncheckedUpdateWithoutTournamentPhaseInput>
    create: XOR<EliminationCreateWithoutTournamentPhaseInput, EliminationUncheckedCreateWithoutTournamentPhaseInput>
    where?: EliminationWhereInput
  }

  export type EliminationUpdateToOneWithWhereWithoutTournamentPhaseInput = {
    where?: EliminationWhereInput
    data: XOR<EliminationUpdateWithoutTournamentPhaseInput, EliminationUncheckedUpdateWithoutTournamentPhaseInput>
  }

  export type EliminationUpdateWithoutTournamentPhaseInput = {
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutEliminationNestedInput
  }

  export type EliminationUncheckedUpdateWithoutTournamentPhaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEliminationTypeFieldUpdateOperationsInput | $Enums.EliminationType
    currentRound?: IntFieldUpdateOperationsInput | number
    isOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutEliminationNestedInput
  }

  export type TournamentGroupUpsertWithWhereUniqueWithoutTournamentPhaseInput = {
    where: TournamentGroupWhereUniqueInput
    update: XOR<TournamentGroupUpdateWithoutTournamentPhaseInput, TournamentGroupUncheckedUpdateWithoutTournamentPhaseInput>
    create: XOR<TournamentGroupCreateWithoutTournamentPhaseInput, TournamentGroupUncheckedCreateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupUpdateWithWhereUniqueWithoutTournamentPhaseInput = {
    where: TournamentGroupWhereUniqueInput
    data: XOR<TournamentGroupUpdateWithoutTournamentPhaseInput, TournamentGroupUncheckedUpdateWithoutTournamentPhaseInput>
  }

  export type TournamentGroupUpdateManyWithWhereWithoutTournamentPhaseInput = {
    where: TournamentGroupScalarWhereInput
    data: XOR<TournamentGroupUpdateManyMutationInput, TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseInput>
  }

  export type TournamentGroupScalarWhereInput = {
    AND?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
    OR?: TournamentGroupScalarWhereInput[]
    NOT?: TournamentGroupScalarWhereInput | TournamentGroupScalarWhereInput[]
    id?: IntFilter<"TournamentGroup"> | number
    tournamentPhaseId?: IntFilter<"TournamentGroup"> | number
    groupNumber?: IntFilter<"TournamentGroup"> | number
    isGroupMatchesEnded?: BoolFilter<"TournamentGroup"> | boolean
    createdAt?: DateTimeFilter<"TournamentGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentGroup"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentPhaseInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentPhaseInput, MatchUncheckedUpdateWithoutTournamentPhaseInput>
    create: XOR<MatchCreateWithoutTournamentPhaseInput, MatchUncheckedCreateWithoutTournamentPhaseInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentPhaseInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentPhaseInput, MatchUncheckedUpdateWithoutTournamentPhaseInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentPhaseInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentPhaseInput>
  }

  export type TournamentUpsertWithoutPhasesInput = {
    update: XOR<TournamentUpdateWithoutPhasesInput, TournamentUncheckedUpdateWithoutPhasesInput>
    create: XOR<TournamentCreateWithoutPhasesInput, TournamentUncheckedCreateWithoutPhasesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutPhasesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutPhasesInput, TournamentUncheckedUpdateWithoutPhasesInput>
  }

  export type TournamentUpdateWithoutPhasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantTournamentUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutPhasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantTournamentUncheckedUpdateManyWithoutTournamentNestedInput
    winners?: TournamentWinnerUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateWithoutWinnersInput = {
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseCreateNestedManyWithoutTournamentInput
    participants?: ParticipantTournamentCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutWinnersInput = {
    id?: number
    name: string
    status?: $Enums.TournamentStatus
    type: $Enums.ParticipantType
    createdAt?: Date | string
    updatedAt?: Date | string
    phases?: TournamentPhaseUncheckedCreateNestedManyWithoutTournamentInput
    participants?: ParticipantTournamentUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutWinnersInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutWinnersInput, TournamentUncheckedCreateWithoutWinnersInput>
  }

  export type ParticipantCreateWithoutPodiumsInput = {
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type ParticipantUncheckedCreateWithoutPodiumsInput = {
    id?: number
    name: string
    type: $Enums.ParticipantType
    elo?: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: ParticipantTournamentUncheckedCreateNestedManyWithoutParticipantInput
    groups?: ParticipantGroupUncheckedCreateNestedManyWithoutParticipantInput
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutParticipant1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutParticipant2Input
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type ParticipantCreateOrConnectWithoutPodiumsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutPodiumsInput, ParticipantUncheckedCreateWithoutPodiumsInput>
  }

  export type TournamentUpsertWithoutWinnersInput = {
    update: XOR<TournamentUpdateWithoutWinnersInput, TournamentUncheckedUpdateWithoutWinnersInput>
    create: XOR<TournamentCreateWithoutWinnersInput, TournamentUncheckedCreateWithoutWinnersInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutWinnersInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutWinnersInput, TournamentUncheckedUpdateWithoutWinnersInput>
  }

  export type TournamentUpdateWithoutWinnersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUpdateManyWithoutTournamentNestedInput
    participants?: ParticipantTournamentUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutWinnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phases?: TournamentPhaseUncheckedUpdateManyWithoutTournamentNestedInput
    participants?: ParticipantTournamentUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type ParticipantUpsertWithoutPodiumsInput = {
    update: XOR<ParticipantUpdateWithoutPodiumsInput, ParticipantUncheckedUpdateWithoutPodiumsInput>
    create: XOR<ParticipantCreateWithoutPodiumsInput, ParticipantUncheckedCreateWithoutPodiumsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutPodiumsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutPodiumsInput, ParticipantUncheckedUpdateWithoutPodiumsInput>
  }

  export type ParticipantUpdateWithoutPodiumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutPodiumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    elo?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: ParticipantTournamentUncheckedUpdateManyWithoutParticipantNestedInput
    groups?: ParticipantGroupUncheckedUpdateManyWithoutParticipantNestedInput
    matchesAsP1?: MatchUncheckedUpdateManyWithoutParticipant1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutParticipant2NestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type MatchCreateManyEliminationInput = {
    id?: number
    tournamentPhaseId: number
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutEliminationInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutEliminationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutEliminationInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyNextMatchInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutNextMatchInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutNextMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutNextMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentCreateManyParticipantInput = {
    id?: number
    tournamentId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupCreateManyParticipantInput = {
    id?: number
    tournamentGroupId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyParticipant1Input = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyParticipant2Input = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyWinnerInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerCreateManyParticipantInput = {
    id?: number
    tournamentId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantTournamentUpdateWithoutParticipantInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantTournamentUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupUpdateWithoutParticipantInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: TournamentGroupUpdateOneRequiredWithoutParticipantGroupsNestedInput
  }

  export type ParticipantGroupUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentGroupId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutParticipant1Input = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutParticipant1Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutParticipant1Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutParticipant2Input = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutParticipant2Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutParticipant2Input = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutWinnerInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUpdateWithoutParticipantInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type TournamentWinnerUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPhaseCreateManyTournamentInput = {
    id?: number
    phaseType: $Enums.PhaseType
    order: number
    isCompleted?: boolean
  }

  export type ParticipantTournamentCreateManyTournamentInput = {
    id?: number
    participantId: number
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentWinnerCreateManyTournamentInput = {
    id?: number
    participantId: number
    place: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentPhaseUpdateWithoutTournamentInput = {
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type TournamentPhaseUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    elimination?: EliminationUncheckedUpdateOneWithoutTournamentPhaseNestedInput
    groups?: TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentPhaseNestedInput
  }

  export type TournamentPhaseUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    phaseType?: EnumPhaseTypeFieldUpdateOperationsInput | $Enums.PhaseType
    order?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParticipantTournamentUpdateWithoutTournamentInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutTournamentsNestedInput
  }

  export type ParticipantTournamentUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantTournamentUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUpdateWithoutTournamentInput = {
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutPodiumsNestedInput
  }

  export type TournamentWinnerUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentWinnerUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    place?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupCreateManyGroupInput = {
    id?: number
    participantId: number
    wins?: number
    losses?: number
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyGroupInput = {
    id?: number
    tournamentPhaseId: number
    eliminationId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantGroupUpdateWithoutGroupInput = {
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type ParticipantGroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutGroupInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentPhase?: TournamentPhaseUpdateOneRequiredWithoutMatchesNestedInput
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    tournamentPhaseId?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentGroupCreateManyTournamentPhaseInput = {
    id?: number
    groupNumber: number
    isGroupMatchesEnded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTournamentPhaseInput = {
    id?: number
    eliminationId?: number | null
    tournamentGroupId?: number | null
    participant1Id?: number | null
    participant2Id?: number | null
    winnerId?: number | null
    nextMatchId?: number | null
    round?: number | null
    serialNumber?: number | null
    isOver?: boolean
    matchType: $Enums.MatchType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentGroupUpdateWithoutTournamentPhaseInput = {
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantGroups?: ParticipantGroupUpdateManyWithoutGroupNestedInput
    matches?: MatchUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateWithoutTournamentPhaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantGroups?: ParticipantGroupUncheckedUpdateManyWithoutGroupNestedInput
    matches?: MatchUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TournamentGroupUncheckedUpdateManyWithoutTournamentPhaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupNumber?: IntFieldUpdateOperationsInput | number
    isGroupMatchesEnded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTournamentPhaseInput = {
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elimination?: EliminationUpdateOneWithoutMatchesNestedInput
    group?: TournamentGroupUpdateOneWithoutMatchesNestedInput
    participant1?: ParticipantUpdateOneWithoutMatchesAsP1NestedInput
    participant2?: ParticipantUpdateOneWithoutMatchesAsP2NestedInput
    winner?: ParticipantUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentPhaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTournamentPhaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    eliminationId?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    participant1Id?: NullableIntFieldUpdateOperationsInput | number | null
    participant2Id?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    nextMatchId?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    serialNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isOver?: BoolFieldUpdateOperationsInput | boolean
    matchType?: EnumMatchTypeFieldUpdateOperationsInput | $Enums.MatchType
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