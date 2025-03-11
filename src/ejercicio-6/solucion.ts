// LSP - si la clase A es una subclase de B, 
// entonces deberíamos poder reemplazar B por A en nuestro código sin que el comportamiento del programa se vea afectado.

// Los pingüinos no pueden volar, por eso hacemos una interfaz 

interface CanFly {
    fly(): void;
  }
  
  class Bird {}
  
  class Sparrow extends Bird implements CanFly {
    fly(): void {
      console.log("Flying...");
    }
  }
  
  class Penguin extends Bird {
    swim(): void {
      console.log("Swimming...");
    }
  }
  
  // Uso en el cliente
  const sparrow = new Sparrow();
  sparrow.fly();
  
  const penguin = new Penguin();
  penguin.swim();