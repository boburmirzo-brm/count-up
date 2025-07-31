# Installment Sales CRM System

This project is a custom-built CRM system designed for businesses that operate on an **installment-based sales model**. It allows sellers to purchase products from suppliers and resell them to customers at higher prices with flexible payment terms. The system also manages product inventory, tracks installment payments, and handles customer and supplier relations.

## Key Features

- **Customer Management**  
  Track customer details, sales history, and payment schedules.

- **Supplier Management (Warehouse)**  
  Manage product stock, incoming goods from suppliers, and cost prices.

- **Sales Agent Dashboard**  
  Enables sales agents to manage product purchases from the warehouse and sell to customers on an installment plan.

- **Installment Payment Tracking**  
  Automatically generate and monitor daily, weekly, or monthly payment schedules.

- **Debt and Revenue Management**  
  Monitor outstanding customer debts and overall business revenue from installment profits.

## System Roles

- **Admin**  
  Full control over the system, users, and settings.

- **Sales Agent**  
  Can purchase goods from the warehouse and resell to customers.

- **Customer**  
  Receives products and pays in installments.

- **Warehouse Manager (optional)**  
  Manages incoming products and stock levels.

## Workflow Overview

1. **Product Purchase**:  
   A sales agent buys products from the internal warehouse (supplier) at a base price.

2. **Installment Sale**:  
   The product is sold to a customer at a marked-up price with a flexible installment plan (daily/weekly/monthly).

3. **Payment Collection**:  
   The system tracks and records all incoming installment payments over time.

4. **Debt Monitoring**:  
   Unpaid or delayed payments are monitored with status indicators and potential penalties.

## Tech Stack

- **Frontend**: React.js
- **Backend**: NestJS  
- **Database**: PostgreSQL / MongoDB  
- **Authentication**: JWT with cookies  
- **Hosting**: Vercel

## Future Improvements

- SMS/email reminders for due payments  
- Offline support for sales agents  
- Dynamic interest/profit calculation  
- Visual dashboards and analytics

## License

This project is open-source and available for personal or commercial use.
