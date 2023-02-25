import QRCode from './components/QRCode'

function App() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-light-gray">
      <QRCode
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        imageUrl="./images/image-qr-code.png"
      />
    </div>
  )
}

export default App
