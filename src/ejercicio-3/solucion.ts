// SRP - Una clase debería ser responsable de una única tarea.
import * as fs from "fs";

interface Reader {
    read(): string;
  }
  
  interface Writer {
    write(data: string): void;
  }
  
  class FileReader implements Reader {
    constructor(private filePath: string) {}
  
    read(): string {
      try {
        return fs.readFileSync(this.filePath, "utf-8");
      } catch (error) {
        console.error("Error al leer el archivo");
        return "";
      }
    }
  }
  
  class FileWriter implements Writer {
    constructor(private filePath: string) {}
  
    write(data: string): void {
      try {
        fs.writeFileSync(this.filePath, data, "utf-8");
        console.log("Archivo escrito exitosamente.");
      } catch (error) {
        console.error("Error al escribir en el archivo");
      }
    }
  }
  
  // Uso en el cliente
  const reader = new FileReader("example.txt");
  const writer = new FileWriter("example.txt");
  
  console.log("Current content:", reader.read());
  writer.write("This is new content.");
  console.log("Updated content:", reader.read());