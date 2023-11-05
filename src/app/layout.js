import Footer from '@/pages/Home/Footer'
import '@/assets/fonts/globals.css'
import { Roboto } from 'next/font/google'
import '@/scss/main.scss'
import Header from '@/pages/Home/Header'
import Head from 'next/head'


const roboto = Roboto({ subsets: ['latin'],  weight: ["100", "300", "400", "500", "700", "900"], })

export const metadata = {
  title: 'THE AUDIT RACE 2023 - FAST LANE',
  description: 'THE AUDIT RACE là cuộc thi học thuật ĐẦU TIÊN và DUY NHẤT trên lĩnh vực Kế toán và Kiểm toán của trường Đại học Kinh tế Quốc dân, được tổ chức bởi CLB Kiểm toán viên tương lai t.FAC và nhận bảo trợ của viện Kế toán - Kiểm toán SAA cùng hội Kế toán Công chứng Anh Quốc ACCA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <meta
          name="description"
          content="THE AUDIT RACE là cuộc thi học thuật ĐẦU TIÊN và DUY NHẤT trên lĩnh vực Kế toán và Kiểm toán của trường Đại học Kinh tế Quốc dân, được tổ chức bởi CLB Kiểm toán viên tương lai t.FAC và nhận bảo trợ của viện Kế toán - Kiểm toán SAA cùng hội Kế toán Công chứng Anh Quốc ACCA"
          key="desc"
        />
      </Head>
      <body id='style-16' className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
