export const BASE_URL = 'https://blog.techsmachine.com'

export const CATEGORIES = ["tooling", "development", "tokenization"] as const

export type PostCategory = typeof CATEGORIES[number]