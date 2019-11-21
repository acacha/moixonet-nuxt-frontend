import * as actionTypes from '../../action-types'
export default {
  [actionTypes.CHANNEL_STORE]: jest.fn().mockResolvedValue(),
  [actionTypes.CHANNEL_DESTROY]: jest.fn().mockResolvedValue()
}
