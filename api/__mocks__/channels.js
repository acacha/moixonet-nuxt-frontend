import channelsFixture from '../../cypress/fixtures/channels'

export default {
  index: jest.fn().mockResolvedValue(channelsFixture),
  store: jest.fn().mockResolvedValue(),
  update: jest.fn().mockResolvedValue(),
  destroy: jest.fn().mockResolvedValue()
}
