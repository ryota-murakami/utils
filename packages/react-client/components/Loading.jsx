import { CircleLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className="min-h-screen min-w-full grid place-content-center">
      <CircleLoader size={150} color={'#36D7B7'} />
    </div>
  )
}
