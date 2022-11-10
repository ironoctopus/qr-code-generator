import QRCode from 'qrcode'
import React from 'react'
import { useState } from 'react'

function App(): any {
  const [url, setUrl] = useState<string>('')
  const [qrcode, setQrcode] = useState<string>('')

  const GenerateQRCode = (): void => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#511a5e',
        light: '#f6e8fa'
      }
    }, (err, url) => {
      if (err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className ="App">
    <h1>QR Generator</h1>
    <input
      type='text'
      placeholder='https://example.com'
      value={url}
      onChange={(evt) => setUrl(evt.target.value)}/>
    <button onClick={GenerateQRCode}>Generate</button>
    {qrcode && <>
      <img src={qrcode} />
      <a href={qrcode} download='qrcode.png'>Download</a>
    </>}
    </div>
  )
}

export default App
