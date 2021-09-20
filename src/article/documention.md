### <i class="bi bi-file-earmark-text-fill"></i> Wiki - คู่มือ
`ก่อนที่จะเริ่ม ตรวจสอบให้แน่ใจก่อนว่าได้ทำตามขั้นตอน Installation แล้ว ถ้าไม่ทำตาม อาจเกิดข้อผิดพลาดได้!`
#### <i class="bi bi-joystick"></i> วิธีการเล่น
1. ให้ใครคนใดคนหนึ่งทำการใช้คำสั่ง `/speedrunner start` เพื่อเริ่มเกม *(ไม่ต้องการ OP)*
2. เลือกฝั่งที่ต้องการเล่นโดย **Runner** จะเป็นได้คนเดียว (1 Player) และ **Hunter** จะเป็นได้ไม่จำกัด และ **Runner** จะสามารถตั้งค่าเกมได้ด้วย เช่น 

   - **I WANT GAMEMODE CREATIVE!!** (เกมโหมดทุกๆ `2 นาที` ใช้ได้แค่ `10 วินาที`) [ดูเพิ่มเติมเกี่ยวกับ Gamemode Creative](#gamemode)
   - **GLOWING MAN** (โดย *Runner* เองจะมี **effect** เรืองแสงที่ตัวเวลา `ไม่จำกัด`)
3. **Runner** จะสามารถเริ่มเกมได้เท่านั้น และหลังกดเริ่มเกมจะมีเวลานับถอยหลัง 15 วินาที
4. เล่นได้เลยยย!!

<a name="gamemode"></a>
<br>

#### Gamemode 1
หลายๆ คนลองเล่นแบบ Gamemode 1 ซึ่งตอนเริ่มเกมมันจะนับถอยหลัง 120 วินาที (2 นาที) ในระหว่างนั้นยังเป็น Gamemode survival ตามปกติอยู่ ซึ่งถ้าเวลานับถอยหลังครบ 120 วินาทีแล้ว ก็จะมีการเปลี่ยน Gamemode ให้อัตโนมัติจาก Gamemode survival เป็น Gamemode creative ซึ่งจะให้ได้แค่ 10 วินาทีเท่านั้น และจะกลับไปนับ 120 วินาทีอีกครั้ง ซึ่งสิ่งที่ให้เสกมา **ไม่ได้** เลยก็คือบล็อก <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/Filled_End_Portal_Frame_%28S%29_JE5_BE2.png" width="32"/> `Ender portal frame` กับ <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/68/Bedrock_JE2_BE2.png" width="32"/> `Bedrock`

<a name="configuration-guide"></a>
<br>

#### <i class="bi bi-terminal-fill"></i> Admin Configuration
ใครที่เป็น Admin เปิดเซิฟ คุณสามารถปรับแต่งใน Config.yml ในโฟลเดอร์ **AirwavySpeedrunner** ซึ่งคุณสามารถปรับแต่งได้ตามนี้
 - `reload:` ปรับแต่งข้อความเวลารีเฟรช
 - `position:` จะเป็นที่เก็บของตำแหน่ง lobby ที่เราเซ็ตตรง [การตั้งค่าที่แนะนำในเกม](#installation) ไม่แนะนำให้แก้ไข
 - `world:` จะมี 3 ข้อย่อย
    - `default-world` โดยปกติจะเป็น **useworld** ซึ่งถ้าคุณอยากได้ชื่อ world ชื่ออื่น ก็สามารถตั้งใหม่ได้ แต่ต้องสร้างโลกโดยใช้ `/mv create ชื่อโลก world` ด้วยครับ
    - `nether-world` และ `the-end-world` ไม่แนะนำให้ปรับครับ

พอเสร็จแล้วให้ใช้คำสั่ง /speedrunner reload ครับ

<a name="warning"></a>
<br>

#### <i class="bi bi-exclamation-triangle-fill"></i> Warning
เนื่องจาก Plugin นี้ยังไม่สมบูรณ์ เรามีข้อควรระวังเป็นอย่างมากเช่น
- **ไม่แนะนำเลยสำหรับเซิฟใหญ่ๆ** แนะนำให้เล่นกับเพื่อน 2 - 10 คน
- Plugin นี้เนื่องจากทำงานทุกๆ 1 วินาทีตอนเกมเริ่ม (Tick-based) ถ้าเครื่องหน่วง เซิฟก็จะหน่วงไปด้วย แนะนำให้เปิดบนคอม
    - Ram 4GB ขึ้นไป (แนะนำให้ตั้งแค่การใช้ Ram ของเซิฟเป็น 2048M)
- พยายามอย่าให้ผู้เล่นเข้าเซิฟตอนโลกกำลัง Regeneration โดยสังเกตตรง Scoreboard ตรง `STATUS` ถ้าเป็น `During Remap` พยายามอย่าให้ผู้เล่นเข้าเซิฟ
- พยายามอย่าตายในเกมตอนเกมกำลังเริ่มหรือกำลังตั้งค่าอยู่
- ไม่แนะนำให้ใช้ Plugin รวมกับ Plugin `Essential`, `Vault` หรือ Plugin พวก set spawn ต่างๆ
