export interface Word {
  date: string,
  'ru'?: string,
  'en'?: string,
  transFrom? : langsString,
  transTo? : langsString
}

export interface Settings {
  gameTime: number,
  numberOfWords: number,
  translateDirectionFrom: string,
  translateDirectionTo: string
}

export interface ApiResponse {
  text: object
}

type langsString = 'ru' | 'en'
