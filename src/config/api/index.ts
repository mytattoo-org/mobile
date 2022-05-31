import axios from 'axios'
import { Platform } from 'react-native'
import { ENV, API_BASE_URL, API_PORT } from 'react-native-dotenv'

const getBaseUrl = (): string => {
  if (String(ENV) === 'prod') return String(API_BASE_URL)

  const port = String(API_PORT)

  const devBaseUrl =
    Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost'

  return `${devBaseUrl}:${port}`
}

const api = axios.create({ baseURL: getBaseUrl() })

export { api }
