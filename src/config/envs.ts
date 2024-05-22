import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  STRIPE_SECRET_KEY: string;
  ENDPOINTSECRET: string;
  SUCCESS_URL: string;
  CANCEL_URL: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    STRIPE_SECRET_KEY: joi.string().required(),
    ENDPOINTSECRET: joi.string().required(),
    SUCCESS_URL: joi.string().required(),
    CANCEL_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  stripeSecretKey: envVars.STRIPE_SECRET_KEY,
  endpointSecret: envVars.ENDPOINTSECRET,
  successUrl: envVars.SUCCESS_URL,
  cancelUrl: envVars.CANCEL_URL,
};
