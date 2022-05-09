
function periodIsLate(last, today, cycleLength)
{
  return Math.ceil(Math.abs((today.getTime() - last.getTime()))/ (1000 * 24 * 3600)) > cycleLength
}