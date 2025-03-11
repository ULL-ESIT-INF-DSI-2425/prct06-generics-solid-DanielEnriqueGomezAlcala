// DIP - 

interface NotificationService {
    notify(message: string): void;
  }
  
  class EmailService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  class ShortMessageService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  class Notifier {
    constructor(private notificationService: NotificationService) {}
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }
  
  // Uso en el cliente
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification("Hello World!");
  
  const smsNotifier = new Notifier(new ShortMessageService());
  smsNotifier.sendNotification("Hello World!");