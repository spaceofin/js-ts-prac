export {};

declare global {
  namespace App {
    function greet(name: string): string;
  }
  const greeting: string;
}
