// ISP - es mejor tener un número elevado de interfaces simples y específicas que tener una interfaz compleja y genérica.

interface Printable {
    print(): void;
  }
  
  interface Scannable {
    scan(): void;
  }
  
  class Printer implements Printable {
    print(): void {
      console.log("Printing...");
    }
  }
  
  class Scanner implements Scannable {
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  class PrinterScanner implements Printable, Scannable {
    print(): void {
      console.log("Printing...");
    }
    scan(): void {
      console.log("Scanning...");
    }
  }
  
  // Uso en el cliente
  const printer = new Printer();
  printer.print();
  
  const scanner = new Scanner();
  scanner.scan();
  
  const printerScanner = new PrinterScanner();
  printerScanner.print();
  printerScanner.scan();