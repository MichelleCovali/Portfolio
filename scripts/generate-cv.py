"""Regenerate the starter CV; review its content before sending applications."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
root = Path(__file__).resolve().parents[1]
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCustom',fontName='Helvetica',fontSize=30,leading=36,textColor=colors.HexColor('#262825'),spaceAfter=8))
styles.add(ParagraphStyle(name='SectionCustom',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=colors.HexColor('#a44f38'),spaceBefore=17,spaceAfter=8))
styles.add(ParagraphStyle(name='BodyCustom',fontName='Helvetica',fontSize=9,leading=14,textColor=colors.HexColor('#454940'),spaceAfter=6))
styles.add(ParagraphStyle(name='TitleCustom',fontName='Helvetica-Bold',fontSize=10,leading=15,spaceAfter=3))
story=[]
def p(text,style='BodyCustom'): story.append(Paragraph(text,styles[style]))
p('Mihaela Covali','NameCustom')
p('Information Technology Student &amp; Aspiring Software Developer','TitleCustom')
p('mihaela.covali@student.nhlstenden.com')
p('<link href="https://github.com/MichelleCovali">github.com/MichelleCovali</link> | <link href="https://www.linkedin.com/in/mihaelacovali/">linkedin.com/in/mihaelacovali</link>')
p('PROFILE','SectionCustom')
p('Fourth-year Information Technology student at NHL Stenden University of Applied Sciences seeking an HBO graduation internship. Hands-on frontend development experience at MetaChef. Open to relocating nationwide in the Netherlands and to opportunities in Italy and Spain.')
p('PROFESSIONAL EXPERIENCE','SectionCustom')
p('Software Developer Intern | MetaChef','TitleCustom')
p('Enschede, Netherlands | September 2025 - January 2026')
for text in ['Developed internal administration interfaces and tools for managing and updating the company\'s digital products.', 'Independently implemented the frontend of the company\'s new website, translating design concepts into a functional and consistent user interface.', 'Contributed to UI/UX design, extending the initial homepage design across the website while collaborating with the Product Owner on design decisions and feedback.']:
 p('- '+text)
p('Technologies: React, Node.js, TypeScript, MongoDB, Strapi, Git, GitHub, Scrum.')
p('EDUCATION','SectionCustom')
p('NHL Stenden University of Applied Sciences','TitleCustom')
p("Bachelor's Degree in Information Technology | September 2023 - Present | Netherlands")
p('Hanze University of Applied Sciences','TitleCustom')
p('Minor in Spanish Language and Culture | February 2026 - August 2026 | Groningen, Netherlands')
p('TECHNICAL SKILLS','SectionCustom')
for text in ['Programming: JavaScript, TypeScript, Java, HTML, CSS','Frameworks and runtime: React, Next.js, Node.js','Databases: MongoDB, PostgreSQL','Tools and platforms: Git, GitHub, GitLab, Figma, Strapi, REST APIs','Methodologies: Scrum, Agile Development']: p(text)
p('LANGUAGES','SectionCustom')
p('Romanian: Native | English: Full professional proficiency')
p('Russian, Spanish, Italian: Intermediate (B1)')
SimpleDocTemplate(str(root/'public/cv.pdf'),pagesize=(595.28,841.89),rightMargin=48,leftMargin=48,topMargin=38,bottomMargin=35,title='Mihaela Covali - CV',author='Mihaela Covali').build(story)
