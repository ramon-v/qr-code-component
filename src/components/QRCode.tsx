import { QRCodeProps } from '../@types'

function QRCode({
  title,
  description,
  imageUrl,
}: QRCodeProps) {
  return (
    <div className="w-80 bg-white p-4 rounded-3xl text-center shadow-lg">
      <img className="w-81 h-81" src={imageUrl} alt="QR Code" />

      <div className="mt-6 px-4 pb-7">
        <h2 className="font-bold text-2xl leading-6">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-4 text-grayish-blue">
          {description}
        </p>
      </div>
    </div>
  )
}

export default QRCode
