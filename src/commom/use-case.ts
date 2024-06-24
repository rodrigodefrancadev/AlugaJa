export abstract class UseCase<Input = void, Output = void> {
  abstract execute(input: Input): Promise<Output>;
}
