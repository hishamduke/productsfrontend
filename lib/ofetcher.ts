import { ofetch } from "ofetch";

export const ofetcher = ofetch.create({ baseURL: process.env?.API_URL });
