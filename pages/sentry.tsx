import * as Sentry from '@sentry/nextjs'

const Test5 = () => (
  <>
    <h1>Client Test 5</h1>
    <button
      onClick={() => {
        try {
          throw new Error('Client Test')
        } catch (error) {
          Sentry.captureException(error)
        }
      }}
    >
      Click me to create a transaction and throw an Error
    </button>
  </>
)

export default Test5
