import * as actionTypes from '../../action-types'
export default {
  [actionTypes.CHANNEL_ADD]: jest.fn().mockResolvedValue(),
  [actionTypes.CHANNEL_REMOVE]: jest.fn().mockResolvedValue()
}
