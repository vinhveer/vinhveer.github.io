const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const projects = [
  {
    id: 'p1',
    title: 'Website doanh nghiệp cho chuỗi nội thất',
    category: 'Corporate website',
    summary:
      'Chuẩn hóa nhận diện online, tối ưu trang dịch vụ và quy trình tiếp nhận khách hàng tiềm năng.',
    result: 'Tăng tỉ lệ khách để lại thông tin và giúp đội sale xử lý lead rõ ràng hơn.',
  },
  {
    id: 'p2',
    title: 'Hệ thống quản lý đơn hàng nội bộ',
    category: 'Custom software',
    summary:
      'Thiết kế workflow riêng cho đội vận hành, giảm thao tác lặp và kiểm soát trạng thái đơn hàng theo thời gian thực.',
    result: 'Tiết kiệm thời gian xử lý thủ công và giảm lỗi vận hành.',
  },
  {
    id: 'p3',
    title: 'Tối ưu hiệu năng website bán hàng',
    category: 'Optimization',
    summary:
      'Rà soát bottleneck, tối ưu asset, sửa lỗi mobile và chuẩn bị nền tảng cho đợt quảng cáo lớn.',
    result: 'Tốc độ tải cải thiện rõ rệt, trải nghiệm mua hàng ổn định hơn.',
  },
]

const posts = [
  {
    id: 'b1',
    title: 'Website doanh nghiệp nên ưu tiên điều gì trước khi làm đẹp',
    excerpt:
      'Một website hiệu quả không bắt đầu từ màu sắc. Nó bắt đầu từ mục tiêu kinh doanh, luồng nội dung và cách người dùng ra quyết định.',
    date: '2026-04-06',
  },
  {
    id: 'b2',
    title: 'Khi nào doanh nghiệp nên làm phần mềm quản lý riêng',
    excerpt:
      'Không phải lúc nào cũng cần “may đo”, nhưng khi quy trình thực tế bắt đầu chật vật với công cụ có sẵn, đó là tín hiệu rõ ràng.',
    date: '2026-04-06',
  },
  {
    id: 'b3',
    title: '3 dấu hiệu website đang làm chậm việc kinh doanh',
    excerpt:
      'Tải chậm, cập nhật khó, và không ai trong doanh nghiệp dám chạm vào phần quản trị là ba dấu hiệu rất thường gặp.',
    date: '2026-04-06',
  },
]

export async function getProjects() {
  await wait(120)
  return projects
}

export async function getPosts() {
  await wait(120)
  return posts
}
