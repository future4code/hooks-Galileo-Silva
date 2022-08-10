<<<<<<< Updated upstream
function checaTriangulo(a: string, b: string, c: string): string {
    if (a !== b && b !== c)  {
=======
function checaTriangulo(a: string, b: string, c: string): string{
    if (a !== b && b !== c) {
>>>>>>> Stashed changes
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }