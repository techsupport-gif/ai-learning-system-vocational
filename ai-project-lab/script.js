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
  { id: 11, title: 'เว็บไซต์จัดการงานกลุ่มนักศึกษา', category: 'web', level: 'medium', description: 'บันทึกงานกลุ่ม จ่ายการแบ่งงาน และกำหนดเวลา' },
  { id: 12, title: 'เว็บไซต์จองคิวร้านอาหาร', category: 'web', level: 'medium', description: 'เลือกเวลา สั่งเมนู และดูสถานะการจอง' },
  { id: 13, title: 'เว็บไซต์คลังความรู้เรื่อง AI', category: 'web', level: 'easy', description: 'แนะนำความรู้เรื่อง AI แบบเข้าใจง่ายสำหรับนักเรียน' },
  { id: 14, title: 'เว็บไซต์ติดตามโภชนาการและสุขภาพ', category: 'web', level: 'medium', description: 'บันทึกมื้ออาหารและติดตามสัดส่วนการรับประทาน' },
  { id: 15, title: 'เว็บไซต์แนะนำหนังสือวัยรุ่น', category: 'web', level: 'easy', description: 'รายชื่อหนังสือพร้อมรีวิวสั้นและความเหมาะกับวัย' },
  { id: 16, title: 'เว็บไซต์แนะนำคาเฟ่สไตล์ญี่ปุ่น', category: 'web', level: 'easy', description: 'แนะนำคาเฟ่สไตล์ญี่ปุ่นและบรรยากาศดีไซน์' },
  { id: 17, title: 'เว็บไซต์แนะนำเกมเปิดประสบการณ์', category: 'web', level: 'medium', description: 'แสดงเกมที่ให้ประสบการณ์และรีวิวแบบง่าย' },
  { id: 18, title: 'เว็บไซต์สั่งซื้อของหวานออนไลน์', category: 'web', level: 'medium', description: 'แสดงเมนูของหวานและระบบสั่งซื้อแบบง่าย' },
  { id: 19, title: 'เว็บไซต์เรื่องราวของโรงเรียน', category: 'web', level: 'easy', description: 'แนะนำประวัติ โรงเรียน กิจกรรม และความภาคภูมิใจ' },
  { id: 20, title: 'เว็บไซต์สรุปข่าวสำหรับวัยรุ่น', category: 'web', level: 'medium', description: 'รวบรวมข่าวและสรุปแบบสั้นเข้าใจง่าย' },

  { id: 21, title: 'โปรแกรมนับคะแนนกีฬา', category: 'app', level: 'easy', description: 'เพิ่มคะแนนเกมกีฬาแบบเรียลไทม์และดูสถิติ' },
  { id: 22, title: 'โปรแกรมสรุปค่าใช้จ่ายรายวัน', category: 'app', level: 'easy', description: 'บันทึกรายรับรายจ่าย และคำนวณยอดรวม' },
  { id: 23, title: 'โปรแกรมจัดการงานกลุ่ม/ตารางเวลา', category: 'app', level: 'medium', description: 'ใช้สำหรับนัดหมายและแผนการทำงานกลุ่ม' },
  { id: 24, title: 'โปรแกรมคำนวณค่าเรียน/ค่าใช้จ่ายนักศึกษา', category: 'app', level: 'easy', description: 'คำนวณค่าเทอม ค่าอาหาร และค่าอุปกรณ์' },
  { id: 25, title: 'โปรแกรมบันทึกจุดหมายปลายทาง', category: 'app', level: 'easy', description: 'ระบุสถานที่ที่ชอบและบันทึกประสบการณ์' },
  { id: 26, title: 'โปรแกรมจัดการแผนการเรียน', category: 'app', level: 'medium', description: 'วางแผนตารางเรียนแต่ละสัปดาห์' },
  { id: 27, title: 'โปรแกรมสร้างบัตรยืนยันตัวตน', category: 'app', level: 'easy', description: 'สร้างข้อมูลรหัสประจำตัวและข้อมูลพื้นฐาน' },
  { id: 28, title: 'โปรแกรมบันทึกเป้าหมายชีวิต', category: 'app', level: 'medium', description: 'เก็บเป้าหมายและติดตามความก้าวหน้า' },
  { id: 29, title: 'โปรแกรมคำนวณวันเกิด/วันสำคัญ', category: 'app', level: 'easy', description: 'บันทึกวันเกิดและวันสำคัญต่าง ๆ' },
  { id: 30, title: 'โปรแกรมบันทึกรายการซื้อของ', category: 'app', level: 'easy', description: 'รายการซื้อสินค้า ราคาต่อชิ้น และผลรวม' },
  { id: 31, title: 'โปรแกรมคุยกับ AI ช่วยทำงานบ้าน', category: 'app', level: 'medium', description: 'แชทบอทที่ให้คำแนะนำเรื่องงานบ้านและการจัดการ' },
  { id: 32, title: 'โปรแกรมฝึกภาษาไทยและภาษาอังกฤษ', category: 'app', level: 'medium', description: 'แบบฝึกหัดคำศัพท์ และคำถามทดสอบ' },
  { id: 33, title: 'โปรแกรมจับเวลาเรียนและพัก', category: 'app', level: 'easy', description: 'จับเวลาเรียนและพักเพื่อเสริมสมาธิ' },
  { id: 34, title: 'โปรแกรมระบบจัดการคำขอ', category: 'app', level: 'medium', description: 'ระบบรับคำร้องและติดตามสถานะ' },
  { id: 35, title: 'โปรแกรมบันทึกความจำเร็ว', category: 'app', level: 'easy', description: 'บันทึกไอเดียและประเด็นความจำที่ต้องจด' },
  { id: 36, title: 'โปรแกรมคำนวณคะแนนการศึกษา', category: 'app', level: 'medium', description: 'คำนวณผลสะสมและเกรดภาพรวม' },
  { id: 37, title: 'โปรแกรมสรุปประโยคที่ชอบ', category: 'app', level: 'easy', description: 'บันทึกคำคมและความคิดเห็นที่ชอบ' },
  { id: 38, title: 'โปรแกรมจดบันทึกไอเดีย', category: 'app', level: 'easy', description: 'เก็บไอเดียและจัดหมวดหมู่แบบง่าย' },
  { id: 39, title: 'โปรแกรมทดสอบความรู้แบบเกม', category: 'app', level: 'medium', description: 'เกมตอบคำถาม สุ่มโจทย์ และให้คะแนน' },
  { id: 40, title: 'โปรแกรมดูภาพและทำสรุปเล็กๆ', category: 'app', level: 'medium', description: 'จะแสดงรูปภาพและให้สรุปความคิด' },

  { id: 41, title: 'เกมตอบคำถามเรื่องไอที', category: 'game', level: 'easy', description: 'ตอบคำถามเรื่องคอมพิวเตอร์และเทคโนโลยี' },
  { id: 42, title: 'เกมยิงศัตรูแบบง่าย', category: 'game', level: 'easy', description: 'นักเรียนเริ่มทำเกมคลิกยิงศัตรูด้วยความเร็ว' },
  { id: 43, title: 'เกมจับคู่ภาพ', category: 'game', level: 'easy', description: 'จับคู่ภาพเพื่อเพิ่มคะแนน' },
  { id: 44, title: 'เกมเลี้ยงสัตว์ในเกม', category: 'game', level: 'medium', description: 'เลี้ยงสัตว์ให้กิน อิ่ม และมีความสุข' },
  { id: 45, title: 'เกมเรียงคำ/คำคล้องจอง', category: 'game', level: 'easy', description: 'เรียงคำให้เป็นประโยคที่ลดความสับสน' },
  { id: 46, title: 'เกมสำรวจสถานที่ในเมือง', category: 'game', level: 'medium', description: 'สำรวจแผนที่และหาวัตถุประสงค์ตามคำสั่ง' },
  { id: 47, title: 'เกมเล่นชนะเพื่อน', category: 'game', level: 'medium', description: 'โหมดผู้เล่น 2 คนหรือเล่นกับ AI' },
  { id: 48, title: 'เกมเลือกเงื่อนไขและเล่าเรื่อง', category: 'game', level: 'medium', description: 'เลือกทางเลือกที่ส่งผลต่อเรื่องราว' },
  { id: 49, title: 'เกมหาคำตอบแบบเรียงลำดับ', category: 'game', level: 'easy', description: 'จัดลำดับคำตอบให้ถูกต้อง' },
  { id: 50, title: 'เกมดัดแปลงจากหนังสือการ์ตูน', category: 'game', level: 'medium', description: 'สร้างเกมจากเรื่องที่ชอบและทำเป็นอินเทอร์แอคทีฟ' },
  { id: 51, title: 'เกมเสิร์ชไอเท็มและผจญภัย', category: 'game', level: 'medium', description: 'ค้นหาวัตถุและเลื่อนระดับไปเรื่อย ๆ' },
  { id: 52, title: 'เกมคัดเลือกอาวุธและความสามารถ', category: 'game', level: 'hard', description: 'เลือกอาวุธและความสามารถก่อนเริ่มเกม' },
  { id: 53, title: 'เกมบ้าบอกรัก', category: 'game', level: 'easy', description: 'เกมสนุกสำหรับวางแผนทำซีน/ข้อความแบบเล่นๆ' },
  { id: 54, title: 'เกมคำนวณและกดปุ่มเร็ว', category: 'game', level: 'easy', description: 'คำนวณและกดคำตอบให้เร็ว' },
  { id: 55, title: 'เกมหมุนวงล้อและได้ของรางวัล', category: 'game', level: 'easy', description: 'มีกลไกการสุ่มและเก็บสะสมรางวัล' },
  { id: 56, title: 'เกมประลองความเร็ว', category: 'game', level: 'medium', description: 'ความเร็วและความแม่นยำในการกด' },
  { id: 57, title: 'เกมผจญภัยในเมือง', category: 'game', level: 'medium', description: 'เดินสำรวจสถานที่ และรับภารกิจต่าง ๆ' },
  { id: 58, title: 'เกมบิวด์เมืองเล็กๆ', category: 'game', level: 'hard', description: 'สร้างเมืองและจัดสรรทรัพยากร' },
  { id: 59, title: 'เกมเรียงแผนที่หลบหลีก', category: 'game', level: 'medium', description: 'เลียนแบบเกมหลบหลีกและหาทางผ่าน' },
  { id: 60, title: 'เกมสมองแบบปริศนา', category: 'game', level: 'hard', description: 'เกมแปลก ๆ ที่ต้องค่อยคิดและวิเคราะห์' },

  { id: 61, title: 'แชทบอทช่วยตอบคำถามเรื่องการเรียน', category: 'ai', level: 'easy', description: 'สร้างแชทบอทที่ช่วยตอบคำถามและให้แนวทางการทำงาน' },
  { id: 62, title: 'AI ตัวช่วยเขียนข้อความสำหรับเพจนักศึกษา', category: 'ai', level: 'easy', description: 'สร้างข้อความโปรโมทกิจกรรมและข่าวโรงเรียน' },
  { id: 63, title: 'AI สร้างภาพโปสเตอร์ศิลปะ', category: 'ai', level: 'medium', description: 'ใช้ AI สร้างโปสเตอร์สวยและเข้ากับธีมหรือหัวข้อ' },
  { id: 64, title: 'AI สร้างภาพประกอบเรื่องราว', category: 'ai', level: 'medium', description: 'สร้างภาพประกอบให้กับเรื่องสั้นหรือสตอรี่' },
  { id: 65, title: 'AI สร้างสติกเกอร์แบบสั้น', category: 'ai', level: 'easy', description: 'สร้าง sticker หรือรูปภาพสั้น ๆ สำหรับส่งคุย' },
  { id: 66, title: 'AI ช่วยสรุปบทเรียน', category: 'ai', level: 'easy', description: 'ป้อนข้อความแล้ว AI สรุปเป็น 3-5 ประเด็น' },
  { id: 67, title: 'AI ช่วยเขียนเนื้อหาคอนเทนต์', category: 'ai', level: 'easy', description: 'เขียนเนื้อหาสำหรับ TikTok หรือเพจที่น่าสนใจ' },
  { id: 68, title: 'AI สร้างภาพแนะนำกิจกรรมโรงเรียน', category: 'ai', level: 'easy', description: 'สร้างภาพโฆษณากิจกรรมและแถลงข่าว' },
  { id: 69, title: 'AI ช่วยเขียนข้อความสำหรับ TikTok', category: 'ai', level: 'easy', description: 'สร้างแคปชั่นและไอเดียโพสต์แบบติดกระแส' },
  { id: 70, title: 'AI สร้างชื่อแอปและโลโก้', category: 'ai', level: 'easy', description: 'ระดมไอเดียชื่อแอปและโลโก้ที่สวย' },
  { id: 71, title: 'AI ช่วยทำแผนกีฬาส่วนตัว', category: 'ai', level: 'medium', description: 'สร้างแผนออกกำลังกายหรือการซ้อมกีฬาตามเป้าหมาย' },
  { id: 72, title: 'AI ช่วยสร้างคำคมและตั้งชื่อโปรเจกต์', category: 'ai', level: 'easy', description: 'ช่วยตั้งชื่อโปรเจกต์และข้อความสั้น ๆ' },
  { id: 73, title: 'AI ช่วยทำแผนการสอนสั้น', category: 'ai', level: 'medium', description: 'จัดทำแผนสอนแบบย่อสำหรับครูหรืออาจารย์' },
  { id: 74, title: 'AI ช่วยสร้างประโยคโฆษณา', category: 'ai', level: 'easy', description: 'เขียนข้อความโฆษณาให้ติดตา' },
  { id: 75, title: 'AI ช่วยทำสรุปข้อมูลสำรวจ', category: 'ai', level: 'medium', description: 'แปลงข้อมูลจากรูปแบบยาวเป็นสรุปง่าย' },
  { id: 76, title: 'AI ช่วยสร้างสคริปต์สั้น', category: 'ai', level: 'easy', description: 'สร้างสคริปต์สั้นสำหรับคลิปสั้นหรือวีดีโอ' },
  { id: 77, title: 'AI ช่วยสร้างไอเดียแนวคิดธุรกิจ', category: 'ai', level: 'medium', description: 'ระดมความคิดตั้งต้นธุรกิจจากความสนใจของนักศึกษา' },
  { id: 78, title: 'AI ช่วยสรุปไอเดียเป็นแผนงาน', category: 'ai', level: 'medium', description: 'แปลงไอเดียล้วน ๆ เป็นแผนและภาพรวม' },
  { id: 79, title: 'AI ช่วยเขียนคำแนะนำอธิบายงาน', category: 'ai', level: 'easy', description: 'สรุปงานให้อยู่ในรูปเอกสารสั้นๆ' },
  { id: 80, title: 'AI ช่วยทำโปสเตอร์กิจกรรม', category: 'ai', level: 'medium', description: 'สร้างภาพโปสเตอร์กิจกรรมและข้อความนำเสนอ' },

  { id: 81, title: 'เว็บไซต์/แอปสร้างคอนเทนต์ TikTok', category: 'social', level: 'easy', description: 'สร้างไอเดียและแคปชั่นโพสต์ให้เหมาะกับวัฒนธรรม TikTok' },
  { id: 82, title: 'เครื่องมือสร้างภาพโปสเตอร์สำหรับเพจ', category: 'social', level: 'easy', description: 'สร้างภาพโปรโมตเพจและกิจกรรม' },
  { id: 83, title: 'เครื่องมือสร้างชื่อสตอรี่และแฮชแท็ก', category: 'social', level: 'easy', description: 'ช่วยคิดชื่อสตอรี่และแฮชแท็กใหม่' },
  { id: 84, title: 'AI สร้างคอนเทนต์วันเกิดและเทศกาล', category: 'social', level: 'easy', description: 'สร้างข้อความและสรุปธีมให้เข้ากับเทศกาล' },
  { id: 85, title: 'AI สร้างคอนเทนต์วิธีใช้ AI สำหรับวัยรุ่น', category: 'social', level: 'medium', description: 'คอนเทนต์สั้น ๆ ให้ความรู้เรื่อง AI แบบเข้าใจง่าย' },
  { id: 86, title: 'เครื่องมือจัดรูปแบบภาพสวยสำหรับโพสต์', category: 'social', level: 'easy', description: 'ช่วยจัดรูปแบบและเรียงช่องว่างให้ดูดี' },
  { id: 87, title: 'ระบบจัดระเบียบคอนเทนต์ในบัญชี', category: 'social', level: 'medium', description: 'เก็บโพสต์วันที่และหมวดหมู่โซเชียล' },
  { id: 88, title: 'เว็บไซต์สรุปแนวคิดคอนเทนต์ที่กำลังนิยม', category: 'social', level: 'medium', description: 'สำรวจแนวคิดและสรุปเป็นเครื่องมือประหยัดเวลา' },
  { id: 89, title: 'เครื่องมือสร้างคอนเทนต์ให้เหมาะกับเพจสถาบัน', category: 'social', level: 'medium', description: 'ปรับข้อความให้ตรงกับรสนิยมและเอกลักษณ์ของสถาบัน' },
  { id: 90, title: 'เครื่องมือสร้างภาพโปรโมชั่นสถานที่ท่องเที่ยว', category: 'social', level: 'easy', description: 'ใช้งานจริงสำหรับทำโฆษณาและแนะนำท่องเที่ยว' },

  { id: 91, title: 'เว็บไซต์ร้านหนังสือออนไลน์', category: 'business', level: 'medium', description: 'จำหน่ายหนังสือและโปรโมชั่นบนเว็บไซต์' },
  { id: 92, title: 'เว็บไซต์ร้านเสื้อผ้าสไตล์วัยรุ่น', category: 'business', level: 'medium', description: 'แสดงสินค้าและหมวดสินค้าแบบสวย' },
  { id: 93, title: 'เว็บไซต์ร้านอาหารสไตล์คาเฟ่', category: 'business', level: 'medium', description: 'ร้านอาหารมีเมนูสินค้าและโปรโมชั่น' },
  { id: 94, title: 'เว็บไซต์ขายของออนไลน์แบบมีหมวดหมู่', category: 'business', level: 'medium', description: 'แสดงสินค้าแบบมีหมวดหมู่และประสบการณ์ใช้งาน' },
  { id: 95, title: 'เว็บไซต์ประกาศรับสมัครงาน', category: 'business', level: 'medium', description: 'หน้าประกาศงานและความต้องการของบริษัท' },
  { id: 96, title: 'เว็บไซต์จัดการสต๊อกสินค้า', category: 'business', level: 'hard', description: 'ระบบเก็บสินค้า คำนวณยอดและสถานะสินค้าคงคลัง' },
  { id: 97, title: 'เว็บไซต์แนะนำสินค้าอุปกรณ์กีฬา', category: 'business', level: 'easy', description: 'แนะนำอุปกรณ์กีฬาและสินค้าโปรโมชั่น' },
  { id: 98, title: 'เว็บไซต์แนะนำสื่อการเรียนการสอน', category: 'business', level: 'easy', description: 'แนะนำเครื่องมือและสื่อเรียนรู้แบบออนไลน์' },
  { id: 99, title: 'เว็บไซต์ขายบริการทำความสะอาด', category: 'business', level: 'medium', description: 'ขายบริการและจัดการข้อมูลลูกค้า' },
  { id: 100, title: 'เว็บไซต์สำหรับร้านนวด/ร้านเสริมสวย', category: 'business', level: 'medium', description: 'เพจหรือเว็บไซต์บริการความสวยความงาม' },

  { id: 101, title: 'โปรแกรมจัดการคอมพิวเตอร์/อุปกรณ์', category: 'it', level: 'medium', description: 'บันทึกอุปกรณ์ รันตรวจสอบ และประวัติการใช้งาน' },
  { id: 102, title: 'AI ช่วยสรุปข้อผิดพลาดของโค้ด', category: 'it', level: 'medium', description: 'ป้อนโค้ดแล้ว AI อธิบายสาเหตุและทางแก้' },
  { id: 103, title: 'โปรแกรมตรวจสอบความเร็วอินเทอร์เน็ต', category: 'it', level: 'easy', description: 'แสดงสถานะและข้อมูลเกี่ยวกับการเชื่อมต่อ' },
  { id: 104, title: 'โปรแกรมสรุปคำแนะนำเรื่องฮาร์ดแวร์และซอฟต์แวร์', category: 'it', level: 'medium', description: 'จัดทำคู่มือและคำแนะนำการใช้งาน' },
  { id: 105, title: 'AI ช่วยสร้างบอทตอบคำถามด้านไอที', category: 'it', level: 'hard', description: 'สร้างแชทบอทที่ตอบคำถามทั่วไปของอุปกรณ์และเทคโนโลยี' },
  { id: 106, title: 'เว็บไซต์ช่วยดูการใช้งาน RAM / CPU', category: 'it', level: 'medium', description: 'แสดงข้อมูลระบบและใช้เพื่อสอนเทคโนโลยี' },
  { id: 107, title: 'โปรแกรมจดบันทึกปัญหาด้านคอมพิวเตอร์', category: 'it', level: 'easy', description: 'บันทึกปัญหาและทางแก้ไขแบบไม่น่าเบื่อ' },
  { id: 108, title: 'เว็บไซต์สรุปวิธีแก้ปัญหาอุปกรณ์ทั่วไป', category: 'it', level: 'easy', description: 'รวมคำถามและวิธีแก้ปัญหาอย่างเป็นระบบ' },
  { id: 109, title: 'โปรแกรมประเมินความเสี่ยงในการใช้งานดิจิทัล', category: 'it', level: 'medium', description: 'ประเมินความเสี่ยงและแนวทางป้องกัน' },
  { id: 110, title: 'เว็บแนะนำการตั้งค่าคอมพิวเตอร์เบื้องต้น', category: 'it', level: 'easy', description: 'ทำคู่มือการตั้งค่าเครื่องคอมพิวเตอร์ง่าย ๆ' },

  { id: 111, title: 'เว็บสรุปข้อมูลและแปลผลแบบง่าย', category: 'research', level: 'easy', description: 'รับข้อมูล แล้วแปลงเป็นสรุปง่าย' },
  { id: 112, title: 'เว็บไซต์แสดงผลรายงานเชิงการตลาด', category: 'research', level: 'medium', description: 'โชว์ผลสำรวจและสัดส่วนต่าง ๆ' },
  { id: 113, title: 'เว็บไซต์สรุปข้อมูลนักเรียนในโรงเรียน', category: 'research', level: 'medium', description: 'นำเสนอข้อมูลเชิงสถิติแบบอ่านง่าย' },
  { id: 114, title: 'เว็บประเมินความชอบเรื่องกิจกรรมต่างๆ', category: 'research', level: 'easy', description: 'สำรวจและวิเคราะห์ความชอบของกลุ่มคน' },
  { id: 115, title: 'AI ช่วยแปลงข้อมูลเป็นแผนภูมิ', category: 'research', level: 'medium', description: 'เปลี่ยนข้อมูลให้เป็นกราฟและแผนภาพ' },
  { id: 116, title: 'AI ช่วยเขียนรายงานสรุปผลสำรวจ', category: 'research', level: 'medium', description: 'เขียนรายงานสรุปจากการสำรวจ' },
  { id: 117, title: 'AI ช่วยสรุปผลการวิเคราะห์ทางสถิติ', category: 'research', level: 'hard', description: 'แปลผลเชิงสถิติให้เข้าใจง่าย' },
  { id: 118, title: 'ระบบจัดเก็บข้อมูลและแสดงผลแบบ dashboard', category: 'research', level: 'hard', description: 'หน้า dashboard สำหรับข้อมูลที่มีหลายประเภท' },
  { id: 119, title: 'แอปบันทึกความคิดเห็นของนักศึกษา', category: 'research', level: 'easy', description: 'บันทึกความคิดเห็นและสรุปประเด็นหลัก' },
  { id: 120, title: 'เว็บสรุปข้อมูลด้านการศึกษา', category: 'research', level: 'medium', description: 'รวมข้อมูลการเรียนและสรุปภาพรวม' },

  { id: 121, title: 'เว็บไซต์ “คนหิวต้มมาม่า” แบบเสียดสีสังคม', category: 'creative', level: 'medium', description: 'สร้างเว็บขำๆ ที่เลียนแบบเรื่องเล่าและความคิดต่างๆ' },
  { id: 122, title: 'เว็บไซต์สร้างตารางชีวิตแบบขำๆ', category: 'creative', level: 'easy', description: 'จัดตารางชีวิตที่ทั้งน่ารักและขำ' },
  { id: 123, title: 'เกมสุ่มผลสำเร็จแบบน่าหัวเราะ', category: 'creative', level: 'easy', description: 'สุ่มผลลัพธ์เกี่ยวกับความสำเร็จแบบตลก' },
  { id: 124, title: 'โปรแกรมสร้างเรื่องสั้นจากประโยคที่ใส่', category: 'creative', level: 'medium', description: 'นำประโยคที่ป้อนเข้ามาเป็นเรื่องสั้น' },
  { id: 125, title: 'AI สร้างการ์ตูนสั้นแบบพากย์', category: 'creative', level: 'medium', description: 'ทำการ์ตูนสั้นแบบมีบรรยากาศและเสียง' },
  { id: 126, title: 'เว็บไซต์แปลงข้อความเป็นการ์ตูน', category: 'creative', level: 'easy', description: 'แปลงข้อความเป็นภาพตลกหรือสตอรี่สั้น' },
  { id: 127, title: 'โปรแกรมสร้างชื่อตัวละครเล่นเกม', category: 'creative', level: 'easy', description: 'ใช้ AI หรือโค้ดสุ่มชื่อตัวละคร' },
  { id: 128, title: 'เกมเลือกตัวละครที่มีบุคลิกต่างกัน', category: 'creative', level: 'medium', description: 'เลือกและสู้กับเกมด้วยบุคลิกของแต่ละตัวละคร' },
  { id: 129, title: 'เว็บไซต์แนะนำ “งานในฝัน” ของนักศึกษา', category: 'creative', level: 'easy', description: 'สร้างโปสเตอร์หรือไอเดียว่าตัวเองอยากทำอะไร' },
  { id: 130, title: 'โปรแกรมสร้างคำคมและคำพูดสั้น', category: 'creative', level: 'easy', description: 'สุ่มคำคมและเลือกให้ตรงความรู้สึก' },
  { id: 131, title: 'เกมสุ่มสไตล์ตัวละคร', category: 'creative', level: 'easy', description: 'สุ่มสไตล์ตัวละครและแสดงกราฟิก' },
  { id: 132, title: 'AI สร้างสตอรี่คมคายแบบสั้น', category: 'creative', level: 'easy', description: 'ใช้ AI สร้างสตอรี่สั้นแบบมีจุดขาย' },
  { id: 133, title: 'โปรแกรมแปลงคำเป็นกราฟิกน่ารัก', category: 'creative', level: 'easy', description: 'แปลงข้อความเป็นภาพและธีมสวย' },
  { id: 134, title: 'เว็บสร้างข้อความแฟนตาซีผ่าน AI', category: 'creative', level: 'medium', description: 'สร้างเรื่องเล่าและข้อความเข้ากับแนวแฟนตาซี' },
  { id: 135, title: 'AI ร่างเรื่องสั้นสไตล์วัยรุ่น', category: 'creative', level: 'medium', description: 'ร่างเรื่องสั้นโดยใช้ AI และเสริมภาพประกอบ' },
  { id: 136, title: 'โปรแกรมช่วยคัดเลือกไอเดียโปรเจกต์', category: 'creative', level: 'medium', description: 'สุ่มและจัดอันดับไอเดียโปรเจกต์' }
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

const tableBody = document.getElementById('projectTableBody');

function renderTable() {
  tableBody.innerHTML = projectData
    .slice(0, 30)
    .map(
      (project) => `
        <tr>
          <td>${project.id}</td>
          <td>${project.title}</td>
          <td>${categoryNames[project.category]}</td>
          <td>${levelNames[project.level]}</td>
        </tr>
      `
    )
    .join('');
}

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

  const thaiPrompt = `สร้าง${project.title} ให้เป็นโปรเจกต์ที่ใช้ HTML CSS JavaScript และสามารถเปิดใช้งานได้ทันทีในเครื่องคอมพิวเตอร์ นักศึกษาจะต้องมี UI ที่สวย ใช้งานง่าย เหมาะกับมือถือ มีฟังก์ชันหลักอย่างน้อย 3 อย่าง และมีกลุ่มเป้าหมายที่ชัดเจน ให้เขียนโค้ดที่พร้อมใช้งาน พร้อมอธิบายวัตถุประสงค์และวิธีใช้งานเป็นภาษาไทย`; 
  const englishPrompt = `Create ${project.title} as a practical web project using HTML, CSS, and JavaScript. It should be easy to run in a browser, mobile responsive, visually appealing, and include at least 3 core functions. The project should be designed for students and should be easy to understand and present in a professional way.`;

  document.getElementById('thaiPrompt').textContent = thaiPrompt;
  document.getElementById('englishPrompt').textContent = englishPrompt;
}

function copyText(targetId) {
  const target = document.getElementById(targetId);
  const text = target.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(`[data-copy-target="${targetId}"]`);
    const originalText = btn.textContent;
    btn.textContent = 'คัดลอกแล้ว';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 1200);
  });
}

document.getElementById('generateBtn').addEventListener('click', generateProject);
document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', () => copyText(button.dataset.copyTarget));
});

renderTable();
generateProject();
