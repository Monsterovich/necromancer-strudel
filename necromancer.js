// NECROMANCER — acid house, Dm, 132 BPM, 134 такта
// Вставь целиком на https://strudel.cc и нажми Ctrl+Enter
// Секции (номера тактов с 0):
// intro 0-15 | verse A 16-23 | interlude 24-31 | verse B 32-39 | chorus 40-47
// interlude 48-63 | verse C 64-71 | interlude 72-85 | verse D 86-91
// chorus 92-99 | outro 100-109 | extension 110-133 (финальный вокал)
//
// ВОКАЛ: нарезан в ./vox/vox_01..vox_07.wav (lead+backing смиксированы).
// Залей папку vox/ + strudel.json в корень GitHub-репы и укажи слаг ниже.

setcps(132/60/4)

// ───────── ударные (TR-909), включаются масками по тактам ─────────
$: s("bd*4").bank("RolandTR909").gain(1)
  .mask("<1!72 0!4 1!33 0 1!24>")

$: s("~ cp ~ cp").bank("RolandTR909").gain(.7)
  .mask("<0!8 1!8 0!8 1!8 0!8 1!8 1!16 0!8 0!4 1!10 0!6 1!16 0!2 1!24>")

$: s("[~ oh]*4").bank("RolandTR909").gain(.45)
  .mask("<0!4 1!104 0!2 1!24>")

$: s("hh*16").bank("RolandTR909").gain("[.3 .15 .22 .15]*4")
  .mask("<0!4 1!104 0!2 1!24>")

// ───────── 303-бас ─────────
$: note(`<
  ~!8
  [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ d2 d2 d2 d2]
  [eb2@2 d2@2 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2@2]
  [eb2@2 d2@2 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2@2]
  [eb2@2 d2@2 ~ d2@2 d2 d2 d2 d2@2 ~ e2 d2 d2]
  [eb2@2 d2@2 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2@2]
  [eb2@2 d2@2 ~ d2@2 d2 d2 d2 d2@2 ~ e2 d2 d2]
  [eb2@2 d2@2 ~ d2@2 d2 d2@2 c3@2 f3@2 e3@2]
  [eb2@2 d2@2 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2@2]

  [[~ d2]*4]!8

  [eb2@2 d2@2 ~ d2@2 d2 ~ ~ c3@2 f3@2 e3@2]!3
  [eb2@2 d2@2 ~ d2@2 d2 ~ ~ g3@2 f3@2 e3@2]
  [eb3@2 d3@2 ~ d3 d3 d3 ~ ~ c3@2 f3@2 e3@2]!2
  [bb3@4 ~ d3 d3 d3 ~ ~ c3@2 f3@2 e3@2]
  [eb3@2 d3@2 ~ d3 d3 d3 ~ ~ g3@2 f3@2 e3@2]

  [[~ d2]*4]!2 [[~ g2]*4] [[~ eb2]*4]
  [~ ~ ~ ~ ~ d2@2 d2 d2@2 c3@2 f3@2 e3@2]
  [d2@4 ~ d2@2 d2 d2@2 c3@2 f3@2 e3@2]
  [bb2*16]
  [eb2*16]

  [d2*16]!2 [g2*16] [eb2*16] [d2*16]!2 [g2*16] [eb2*16]

  [~ ~ ~ ~ ~ d2 d2@2 ~ d2 c2@2 eb2@4]
  [d2@3 d2@2 d2 d2@2 ~ d2 f2@2 eb2@4]
  [d2@3 d2@2 d2 d2@2 ~ d2 c2@2 eb2@4]
  [d2@3 d2@2 d2 d2@2 ~ d2 f2@2 eb2@4]
  [d2@2 f#2 a2 a2 a2 d3 a2 a2 d3 c2@2 eb2@4]
  [d2@2 f#2 a2 a2 a2 d3 a2 a2 d3 f2@2 eb2@4]
  [f#2@2 a2 d3 a2 d3 d3@2 d3 d3 c3@2 eb3@4]
  [d3@2 d3 a3 d3 d3 a3@2 d3 a3 f2@2 eb2@4]
  [eb2@2 d2@2 ~ d2 d2 d2 d2 d2 d2 d2 d2 d2 d2@2]
  [eb2@2 d2@2 ~ d2 d2 d2 d2 d2 d2 d2 f2@2 f2@2]
  [eb2@2 d2@2 ~ d2 d2 d2 d2 d2 d2 d2 d2 d2 f2@2]
  [eb2@2 d2@2 ~ d2 d2 d2 d2 d2 d2 d2 e2@4]
  [d3@4 ~ ~ ~ ~ ~ ~ c3@2 f3@2 e3@2]!2
  [bb3@4 ~ ~ ~ ~ ~ ~ c3@2 f3@2 e3@2]
  [eb3 ~ ~ ~]

  [[~ d2]*4]!2 [[~ eb2]*4] [[~ d2]*4] [[~ d2]*4]!2 [[~ eb2]*4] [[~ d2]*4]

  [d2]
  [eb3 c3]
  [d3]
  [d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 c3@2 f3@2 e3@2]
  [d3@8 ~ ~ c3@2 f3@2 e3@2]
  [g3@8 c3@4 f3@2 g3@2]
  [bb3@8 ~ ~ c4@2 bb3@2 a3@2]
  [g3]
  [d2@2 d2@2 d2 d2@2 d2 d2@2 d2 d2@2 d2 d2@2]
  [d2 d2 d2@2 d2 d2@2 d2 d2@2 c2@2 f2@2 e2@2]
  [d2@4 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2 d2]
  [d2 d2 d2@2 ~ d2@2 d2 d2@2 d2@2 ~ d2 d2 d2]
  [eb2@2 d2@2 d2@4 e2@8]
  [eb2@2 d2@2 ~ d2@2 d2 d2 d2 d2@2 ~ e2@2 d2]

  [[~ d2]*4]!2 [[~ g2]*4] [[~ eb2]*4]
  [~ ~ ~ ~ ~ ~ ~ ~ d2@4 ~ ~ ~ ~]
  [d2@4 d2@4 d2@2 d2@2 f3 f3 f3@2]

  [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c3@2 f3@2 e3@2]
  [d3 ~ ~ ~]
  [g2*16] [eb2*16] [d2*16]!2 [bb2*16] [eb2*16]

  [d3@4 ~ ~ ~ ~ ~ ~ c3@2 f3@2 e3@2]
  [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c3@2 f3@2 e3@2]!5
  [bb3@8 ~ ~ c3@2 f3@2 e3@2]
  [eb3]
  [d2 d2 d2 d2]
  [d2@3 ~]

  [d2*16]!3 [g2*16] [eb2*16] [d2*16]!3
  [d2*16]!3 [g2*16] [eb2*16] [d2*16]!3
  [d2*16]!3 [g2*16] [eb2*16] [d2*16]!3
>`)
  .s("sawtooth")
  .lpf(sine.range(300, 2400).slow(16))
  .lpq(16).decay(.14).sustain(.35).release(.04)
  .distort(.5).gain(.5)

// ───────── вокальная мелодия (синт-лид) ─────────
$: note(`<
  ~!16

  [~ a4 a4 a4 a4 a4 a4 a4]
  [a4 ~ ~ ~]
  [~ a4 a4 a4 bb4 bb4 bb4 bb4]
  [bb4 a4 ~ ~ ~ ~ ~ ~]
  [~ a4 a4 a4 a4 a4 a4 a4]
  [a4 ~ ~ ~]
  [~ a4 a4 a4 bb4 bb4 bb4 bb4]
  [bb4 a4 ~ ~ ~ ~ ~ ~]

  ~!8

  [~ d5 d5 d5 d5 c5 f5 e5]
  [d5 d5 d5 d5 d5 c5 f5 e5]
  [d5 g5 g5 g5 g5 g5 g5 g5]
  [eb5 eb5 eb5 eb5 eb5 eb5 eb5 eb5]
  [d5 ~ ~ ~]
  ~!3

  [d5@4 d5@4 ~ ~ c5 c5 f5@2 e5@2]
  [d5@4 d5 d5@2 d5@3 c5@2 f5@2 e5@2]
  [d5 g5 g5 g5 g5 g5 g5 g5]
  [eb5@4 eb5@2 eb5@2 eb5@2 eb5@2 eb5 eb5@3]
  [d5@4 d5@4 ~ ~ c5@2 f5@2 e5@2]
  [d5@4 d5@2 d5@2 c5@2 c5@2 f5@2 e5@2]
  [d5@4 g5@2 g5@2 g5@2 g5 g5@3 g5@2]
  [eb5@4 eb5@2 eb5@2 eb5 eb5@3 eb5@2 eb5@2]

  ~!16

  [~ a4 a4 a4 a4 a4 a4 a4]
  [a4 ~ ~ ~]
  [~ bb4 bb4 bb4 bb4 bb4 c5 bb4]
  [a4 ~ ~ ~]
  [~ a4 a4 a4 a4 a4 a4 a4]
  [d4 ~ ~ ~]
  [~ bb4 bb4 bb4 bb4 bb4 c5 bb4]
  [a4 ~ ~ ~]

  ~!14

  [~ d5 d5 d5 d5 d5 f5 e5]
  [d5 d5 d5 d5 d5 d5 f5 e5]
  [d5 g5 g5 g5 g5 g5 g5 g5]
  [eb5@2 eb5@2 eb5@2 eb5@2 eb5@2 eb5@2 eb5 eb5@3]
  [d5 ~ ~ ~]
  ~

  [d5@4 d5@4 ~ ~ ~ ~ ~ ~ ~ ~]
  [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 c5 f5@2 e5@2]
  [d5@4 g5 ~ ~ ~ ~ ~ ~ ~ ~ ~ f#5 f5]
  [eb5@12 ~ ~ ~ ~]
  [d5@2 d5@2 d5@2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]
  [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 c5 f5@2 e5@2]
  [bb5]
  [eb5@12 ~ ~ ~ ~]

  ~!10

  ~!24
>`)
  .s("supersaw").lpf(4000).attack(.01).release(.2)
  .delay(.3).delaytime(.34).delayfeedback(.4).room(.4).gain(.3)

// ───────── аккордовые стабы ─────────
$: note(`<
  ~!16

  [d3,f3,a3]!16

  [d3,f3,a3]!2 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!2 [bb2,d3,f3] [eb3,g3,bb3]

  [d3,f3,a3]!2 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!2 [g3,bb3,d4] [eb3,g3,bb3]

  [[d3,f3,a3]@3 [eb3,g3,bb3,d4]]!8
  [d3,f3,a3]!3 [[d3,f3,a3]@3 [eb3,g3,bb3,d4]] [d3,f3,a3]!4

  [d3,f3,a3]!2 [eb3,g3,bb3] [d3,f3,a3] [d3,f3,a3]!2 [eb3,g3,bb3] [d3,f3,a3]

  [d3,f3,a3] [d3,eb3,g3,bb3] [d3,f3,a3]!2 [d3,f3,a3] [eb3,g3,bb3] [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!4 [[d3,f3,a3] [eb3,g3,bb3]] [d3,f3,a3]

  [d3,f3,a3]!2 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!2

  [d3,f3,a3]!2 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!2 [bb2,d3,f3] [eb3,g3,bb3]

  [d3,f3,a3]!6 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3] ~

  [d3,f3,a3]!3 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!3
  [d3,f3,a3]!3 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!3
  [d3,f3,a3]!3 [g3,bb3,d4] [eb3,g3,bb3] [d3,f3,a3]!3
>`)
  .struct("x ~ ~ x ~ ~ x ~")
  .s("sawtooth").lpf(1800).decay(.12).sustain(0).release(.1)
  .room(.3).gain(.28)

// ═══════════════════════════════════════════════════════════════
//  ВОКАЛ — нарезан по тактам (1 такт = 1 цикл @132 BPM)
//  Нарезка: vox/vox_01..vox_07.wav  (lead+backing уже смиксированы)
//  Положи в репо:  vox/*.wav  +  strudel.json  (в корне)
//  Раскладка репы:
//      strudel.json          <- _base = raw.githubusercontent.com/USER/REPO/main/
//      vox/vox_01_verseA.wav
//      vox/vox_02_verseB.wav
//      vox/vox_03_chorus.wav
//      vox/vox_04_hook.wav
//      vox/vox_05_verseC.wav
//      vox/vox_06_verseD.wav
//      vox/vox_07_finale.wav
// ═══════════════════════════════════════════════════════════════
samples('github:Monsterovich/necromancer-strudel');
// локальный вариант (без github): подними сервер с CORS в этой папке и раскомментируй:
// samples('http://localhost:8000/strudel.json');

//  такт  14 → verse A      (12 тактов)
$: s("<~!14 vox_01_verseA ~!119>").gain(1).room(.22)
//  такт  34 → verse B      (8 тактов)
$: s("<~!34 vox_02_verseB ~!99>").gain(1).room(.22)
//  такт  44 → chorus       (13 тактов)
$: s("<~!44 vox_03_chorus ~!89>").gain(1).room(.22)
//  такт  58 → hook         (3 такта)
$: s("<~!58 vox_04_hook ~!75>").gain(1).room(.22)
//  такт  64 → verse C      (18 тактов)
$: s("<~!64 vox_05_verseC ~!69>").gain(1).room(.22)
//  такт  83 → verse D      (17 тактов)
$: s("<~!83 vox_06_verseD ~!50>").gain(1).room(.22)
//  такт 113 → финал        (21 такт)
$: s("<~!113 vox_07_finale ~!20>").gain(1).room(.22)
