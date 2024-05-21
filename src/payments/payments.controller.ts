import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return 'Create Payment Session';
  }

  @Get('success')
  success() {
    return {
      ok: true,
      message: 'Payment Succesful',
    };
  }

  @Get('cancel')
  cancel() {
    return {
      ok: false,
      message: 'Payment Cancelled',
    };
  }

  @Post('webhook')
  async stripeWebhook() {
    return 'Stripe Webhook';
  }
}