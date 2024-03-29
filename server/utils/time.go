package utils

import (
	"time"
)

func UtcTm2UtcString(utcMillis int64) string {
	// 将毫秒时间戳转换为 time.Time 类型
	utcTime := time.Unix(0, utcMillis*int64(time.Millisecond)).UTC()

	// 将时间格式化为字符串
	timeStr := utcTime.Format("2006-01-02 15:04:05")

	//fmt.Println("UTC 时间字符串:", timeStr)
	return timeStr
}
func UtcTm2LocalString(utcMillis int64) string {
	// 将毫秒时间戳转换为 time.Time 类型
	utcTime := time.Unix(0, utcMillis*int64(time.Millisecond)).UTC()

	// 将时间转换为本地时间
	localTime := utcTime.Local()

	// 将时间格式化为字符串
	timeStr := localTime.Format("2006-01-02 15:04:05")

	//fmt.Println("本地时间字符串:", timeStr)
	return timeStr
}
