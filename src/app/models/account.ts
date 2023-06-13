export interface User {
  first_name: string
  last_name: string
  email: string
}

export interface Account {
  id: number
  company_name: string
  company_address: string
  company_sector: string
  website: string
}

export interface AccountProfile {
  user: User
  account: Account
}