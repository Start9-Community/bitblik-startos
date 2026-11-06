import { sdk } from '../sdk'
import { primaryUrl } from './setPrimaryUrl'

export const actions = sdk.Actions.of().addAction(primaryUrl.action)
