export default {
	'locale': 'sv-SE',
	'date': {
		'hour24': true,
		'formats': {
			'dateFormats': {
				'full': 'dddd \'den\' d MMMM yyyy',
				'medium': 'd MMMM yyyy',
				'short': 'yyyy-MM-dd',
				'monthYear': 'MMMM yyyy',
				'monthDay': 'MMMM d'
			},
			'timeFormats': {
				'full': 'HH:mm ZZZ',
				'medium': 'HH:mm',
				'short': 'HH:mm'
			}
		},
		'calendar': {
			'type': 'gregorian',
			'firstDayOfWeek': 1,
			'weekendStartDay': 6,
			'weekendEndDay': 0,
			'months': {
				'short': [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'Maj',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Okt',
					'Nov',
					'Dec'
				],
				'long': [
					'Januari',
					'Februari',
					'Mars',
					'April',
					'Maj',
					'Juni',
					'Juli',
					'Augusti',
					'September',
					'Oktober',
					'November',
					'December'
				]
			},
			'days': {
				'narrow': [
					'S',
					'M',
					'T',
					'O',
					'T',
					'F',
					'L'
				],
				'short': [
					'Sön',
					'Mån',
					'Tis',
					'Ons',
					'Tor',
					'Fre',
					'Lör'
				],
				'long': [
					'Söndag',
					'Måndag',
					'Tisdag',
					'Onsdag',
					'Torsdag',
					'Fredag',
					'Lördag'
				]
			},
			'dayPeriods': {
				'am': 'FM',
				'pm': 'EM'
			}
		}
	},
	'number': {
		'patterns': {
			'decimal': {
				'positivePattern': '{number}',
				'negativePattern': '-{number}'
			},
			'percent': {
				'positivePattern': '%{number}',
				'negativePattern': '-%{number}'
			}
		},
		'symbols': {
			'decimal': ',',
			'group': '.',
			'negative': '-',
			'percent': '%'
		},
		'groupSize': 3
	},
	'fileSize': {
		'patterns': {
			'fileSizePattern': '{number} {unit}'
		},
		'units' : {
			'gigabyte': 'GB',
			'megabyte': 'MB',
			'kilobyte': 'kB',
			'bytes': 'Byte',
			'byte': 'Byte'
		}
	}
};
