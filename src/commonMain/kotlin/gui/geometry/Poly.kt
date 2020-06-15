package gui.geometry

import math.Vec2d

class Poly {
    fun contains(p: Vec2d, points: List<Vec2d>): Boolean {
        var result = false
        var j = points.size - 1
        for (i in 0 until points.size) {
            val pi = points[i]
            val pj = points[j]
            if (pi.y < p.y && pj.y >= p.y || pj.y < p.y && pi.y >= p.y) {
                if (pi.x + (p.y - pi.y) / (pj.y - pi.y) * (pj.x - pi.x) < p.x) {
                    result = !result
                }
            }
            j = i
            // if (polygon[i].X + (testPoint.Y - polygon[i].Y) / (polygon[j].Y - polygon[i].Y) *
            // (polygon[j].X - polygon[i].X) < testPoint.X)
        }
        return result
    }
}

// from a C# version of this:
// https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html#License%20to%20Use


/**
 *
 *     public static bool IsPointInPolygon4(PointF[] polygon, PointF testPoint)
{
bool result = false;
int j = polygon.Count() - 1;
for (int i = 0; i < polygon.Count(); i++)
{
if (polygon[i].Y < testPoint.Y && polygon[j].Y >= testPoint.Y || polygon[j].Y < testPoint.Y && polygon[i].Y >= testPoint.Y)
{
if (polygon[i].X + (testPoint.Y - polygon[i].Y) / (polygon[j].Y - polygon[i].Y) * (polygon[j].X - polygon[i].X) < testPoint.X)
{
result = !result;
}
}
j = i;
}
return result;
}
 *
 * **/
