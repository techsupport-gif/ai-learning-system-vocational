const projectData = [
  { id: 1, title: 'เว็บไซต์แนะนำร้านกาแฟสไตล์วัยรุ่น', category: 'web', level: 'easy', description: 'สร้างหน้า landing page สำหรับร้านกาแฟที่มีดีไซน์เรียบแต่ทันสมัย' },
  { id: 2, title: 'เว็บไซต์แนะนำเกมมือถือยอดนิยม', category: 'web', level: 'medium', description: 'แสดงบทความ รีวิวเกม คอนเทนต์เกม และเมนูรองรับมือถือ' },
  { id: 3, title: 'เว็บไซต์เก็บรายการหนังที่ชอบ', category: 'web', level: 'easy', description: 'เพิ่ม ลบ แก้ไข และแสดงแนวหนังที่ชอบแบบง่าย' },
  { id: 4, title: 'เว็บไซต์จัดการงานบ้านในครัวเรือน', category: 'web', level: 'medium', description: 'ระบบบันทึกงานบ้าน รายการสิ่งที่ต้องทำ และสถานะการทำงาน' },
  { id: 5, title: 'เว็บไซต์สอนภาษาไทยแบบเกม', category: 'web', level: 'medium', description: 'เกมทดสอบคำศัพท์และความรู้ภาษาไทยแบบมีคะแนน' },
  { id: 6, title: 'เว็บไซต์แนะนำสถานที่ท่องเที่ยวในจังหวัด', category: 'web', level: 'easy', description: 'แนะนำสถานที่ท่องเที่ยวพร้อมภาพและข้อมูลสั้นๆ' },
  { id: 7, title: 'เว็บไซต์โปรโมชั่นสำหรับนักเรียน', category: 'web', level: 'easy', description: 'แสดงคูปอง รหัสโปรโมชั่น และกิจกรรมที่นักเรียนสนใจ' },
  { id: 8, title: 'เว็บไซต์ร้านคอมพิวเตอร์และอุปกรณ์ไอที', category: 'web', level: 'medium', description: 'แสดงสินค้าและหมวดหมู่สินค้าด้านไอที' },
  { id: 9, title: 'เว็บไซต์แนะนำคอนเสิร์ตและเทศกาล', category: 'web', level: 'easy', description: 'จัดแสดงข้อมูลและปฏิทินเทศกาลด้วยดีไซน์สวย' },
  { id: 10, title: 'เว็บไซต์ศิลปินนักร้องที่ชอบ', category: 'web', level: 'easy', description: 'แนะนำศิลปินเรื่องราวและเพลงยอดนิยม' },
  { id: 11, title: 'โปรแกรมสรุปค่าใช้จ่ายรายวัน', category: 'app', level: 'easy', description: 'บันทึกรายรับรายจ่าย และคำนวณยอดรวม' },
  { id: 12, title: 'โปรแกรมจัดการงานกลุ่ม/ตารางเวลา', category: 'app', level: 'medium', description: 'ใช้สำหรับนัดหมายและแผนการทำงานกลุ่ม' },
  { id: 13, title: 'โปรแกรมคำนวณค่าเรียน/ค่าใช้จ่ายนักศึกษา', category: 'app', level: 'easy', description: 'คำนวณค่าเทอม ค่าอาหาร และค่าอุปกรณ์' },
  { id: 14, title: 'โปรแกรมบันทึกเป้าหมายชีวิต', category: 'app', level: 'medium', description: 'เก็บเป้าหมายและติดตามความก้าวหน้า' },
  { id: 15, title: 'โปรแกรมฝึกภาษาไทยและภาษาอังกฤษ', category: 'app', level: 'medium', description: 'แบบฝึกหัดคำศัพท์ และคำถามทดสอบ' },
  { id: 16, title: 'เกมตอบคำถามเรื่องไอที', category: 'game', level: 'easy', description: 'ตอบคำถามเรื่องคอมพิวเตอร์และเทคโนโลยี' },
  { id: 17, title: 'เกมยิงศัตรูแบบง่าย', category: 'game', level: 'easy', description: 'นักเรียนเริ่มทำเกมคลิกยิงศัตรูด้วยความเร็ว' },
  { id: 18, title: 'เกมจับคู่ภาพ', category: 'game', level: 'easy', description: 'จับคู่ภาพเพื่อเพิ่มคะแนน' },
  { id: 19, title: 'เกมคำนวณและกดปุ่มเร็ว', category: 'game', level: 'easy', description: 'คำนวณและกดคำตอบให้เร็ว' },
  { id: 20, title: 'เกมเรียงคำและเกมสมอง', category: 'game', level: 'medium', description: 'เรียงคำและตอบปริศนาทางความคิด' },
  { id: 21, title: 'AI ช่วยสรุปบทเรียน', category: 'ai', level: 'easy', description: 'ป้อนข้อความแล้ว AI สรุปเป็น 3-5 ประเด็นสำคัญ' },
  { id: 22, title: 'AI ช่วยเขียนคอนเทนต์ TikTok', category: 'ai', level: 'easy', description: 'สร้างแคปชั่นและไอเดียโพสต์แบบติดกระแส' },
  { id: 23, title: 'AI สร้างภาพโปสเตอร์', category: 'ai', level: 'medium', description: 'ใช้ AI สร้างโปสเตอร์สวยและเข้ากับธีมหรือหัวข้อ' },
  { id: 24, title: 'AI สร้างสติกเกอร์และภาพประกอบ', category: 'ai', level: 'easy', description: 'สร้าง sticker หรือรูปภาพสั้น ๆ สำหรับส่งคุย' },
  { id: 25, title: 'AI สร้างชื่อแอปและโลโก้', category: 'ai', level: 'easy', description: 'ระดมไอเดียชื่อแอปและโลโก้ที่สวย' },
  { id: 26, title: 'เว็บไซต์/แอปสร้างคอนเทนต์ TikTok', category: 'social', level: 'easy', description: 'สร้างไอเดียและแคปชั่นโพสต์ให้เหมาะกับแนว TikTok' },
  { id: 27, title: 'เครื่องมือสร้างภาพโปสเตอร์สำหรับเพจ', category: 'social', level: 'easy', description: 'สร้างภาพโปรโมตเพจและกิจกรรม' },
  { id: 28, title: 'AI สร้างคอนเทนต์วันเกิดและเทศกาล', category: 'social', level: 'easy', description: 'สร้างข้อความและสรุปธีมให้เข้ากับเทศกาล' },
  { id: 29, title: 'เว็บไซต์ร้านหนังสือออนไลน์', category: 'business', level: 'medium', description: 'จำหน่ายหนังสือและโปรโมชั่นบนเว็บไซต์' },
  { id: 30, title: 'เว็บไซต์ร้านเสื้อผ้าสไตล์วัยรุ่น', category: 'business', level: 'medium', description: 'แสดงสินค้าและหมวดสินค้าแบบสวย' },
  { id: 31, title: 'เว็บไซต์ร้านอาหารสไตล์คาเฟ่', category: 'business', level: 'medium', description: 'ร้านอาหารมีเมนูสินค้าและโปรโมชั่น' },
  { id: 32, title: 'เว็บไซต์ขายของออนไลน์แบบมีหมวดหมู่', category: 'business', level: 'medium', description: 'แสดงสินค้าแบบมีหมวดหมู่และประสบการณ์ใช้งาน' },
  { id: 33, title: 'โปรแกรมจัดการคอมพิวเตอร์/อุปกรณ์', category: 'it', level: 'medium', description: 'บันทึกอุปกรณ์ รันตรวจสอบ และประวัติการใช้งาน' },
  { id: 34, title: 'AI ช่วยสรุปข้อผิดพลาดของโค้ด', category: 'it', level: 'medium', description: 'ป้อนโค้ดแล้ว AI อธิบายสาเหตุและทางแก้' },
  { id: 35, title: 'โปรแกรมตรวจสอบความเร็วอินเทอร์เน็ต', category: 'it', level: 'easy', description: 'แสดงสถานะและข้อมูลเกี่ยวกับการเชื่อมต่อ' },
  { id: 36, title: 'เว็บสรุปข้อมูลและแปลผลแบบง่าย', category: 'research', level: 'easy', description: 'รับข้อมูล แล้วแปลงเป็นสรุปง่าย' },
  { id: 37, title: 'เว็บไซต์แสดงผลรายงานเชิงการตลาด', category: 'research', level: 'medium', description: 'โชว์ผลสำรวจและสัดส่วนต่าง ๆ' },
  { id: 38, title: 'AI ช่วยแปลงข้อมูลเป็นแผนภูมิ', category: 'research', level: 'medium', description: 'เปลี่ยนข้อมูลให้เป็นกราฟและแผนภาพ' },
  { id: 39, title: 'AI ช่วยเขียนรายงานสรุปผลสำรวจ', category: 'research', level: 'medium', description: 'เขียนรายงานสรุปจากการสำรวจ' },
  { id: 40, title: 'เว็บไซต์ “คนหิวต้มมาม่า” แบบเสียดสีสังคม', category: 'creative', level: 'medium', description: 'สร้างเว็บขำๆ ที่เลียนแบบเรื่องเล่าและความคิดต่างๆ' },
  { id: 41, title: 'เกมสุ่มผลสำเร็จแบบน่าหัวเราะ', category: 'creative', level: 'easy', description: 'สุ่มผลลัพธ์เกี่ยวกับความสำเร็จแบบตลก' },
  { id: 42, title: 'โปรแกรมสร้างเรื่องสั้นจากประโยคที่ใส่', category: 'creative', level: 'medium', description: 'นำประโยคที่ป้อนเข้ามาเป็นเรื่องสั้น' },
  { id: 43, title: 'AI สร้างการ์ตูนสั้นแบบพากย์', category: 'creative', level: 'medium', description: 'ทำการ์ตูนสั้นแบบมีบรรยากาศและเสียง' },
  { id: 44, title: 'โปรแกรมสร้างชื่อตัวละครเล่นเกม', category: 'creative', level: 'easy', description: 'ใช้ AI หรือโค้ดสุ่มชื่อตัวละคร' },
  { id: 45, title: 'เกมจับคู่ภาพชนิดสบายๆ', category: 'game', level: 'easy', description: 'เกมง่ายและสร้างความสนุกให้เด็ก' }
];

const categoryNames = {
  all: 'ทุกหมวด',
  web: 'เว็บ/เว็บไซต์',
  app: 'โปรแกรม/แอป',
  game: 'เกม',
  ai: 'AI & สื่อ',
  social: 'Social Media',
  business: 'ธุรกิจ',
  it: 'ไอที / Support',
  research: 'รายงาน/ข้อมูล',
  creative: 'สร้างสรรค์'
};

const levelNames = {
  all: 'ทุกระดับ',
  easy: 'ง่าย',
  medium: 'กลาง',
  hard: 'ยาก'
};

function generateProject() {
  const category = document.getElementById('categorySelect').value;
  const level = document.getElementById('levelSelect').value;

  const filtered = projectData.filter((project) => {
    const categoryOk = category === 'all' || project.category === category;
    const levelOk = level === 'all' || project.level === level;
    return categoryOk && levelOk;
  });

  const project = filtered[Math.floor(Math.random() * filtered.length)] || projectData[0];

  document.getElementById('projectCategory').textContent = categoryNames[project.category];
  document.getElementById('projectDifficulty').textContent = levelNames[project.level];
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectDescription').textContent = project.description;

  const thaiPrompt = `สร้าง${project.title} ให้เป็นผลงานที่ใช้ HTML CSS JavaScript และสามารถเปิดใช้งานได้ทันทีบน browser นักเรียนต้องมี UI ที่สวย ใช้งานง่าย เหมาะกับมือถือ มีฟังก์ชันหลักอย่างน้อย 3 อย่าง และสามารถอธิบายวัตถุประสงค์และวิธีใช้งานเป็นภาษาไทยได้`; 
  const englishPrompt = `Create ${project.title} as a practical web project using HTML, CSS, and JavaScript. It should run in a browser, be mobile responsive, visually appealing, and include at least 3 core functions for student use.`;

  document.getElementById('thaiPrompt').textContent = thaiPrompt;
  document.getElementById('englishPrompt').textContent = englishPrompt;
}

function copyText(targetId) {
  const target = document.getElementById(targetId);
  const text = target.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const button = document.querySelector(`[data-copy-target="${targetId}"]`);
    const originalText = button.textContent;
    button.textContent = 'คัดลอกแล้ว';
    setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  });
}

document.getElementById('generateBtn').addEventListener('click', generateProject);
document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copyTarget));
});

generateProject();
