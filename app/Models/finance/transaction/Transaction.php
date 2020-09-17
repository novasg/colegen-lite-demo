<?php

namespace App\Models\Finance\Transaction;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Transaction extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'number',
                            'type',
                            'user_id',
                            'amount',
                            'account_id',
                            'head',
                            'payment_method_id',
                            'registration_id',
                            'transaction_group_id',
                            'student_fee_record_id',
                            'date',
                            'is_cancelled',
                            'cancellation_remarks',
                            'remarks',
                            'options',
                            'instrument_number',
                            'instrument_date',
                            'instrument_clearing_date',
                            'instrument_bank_detail',
                            'reference_number',
                            'source',
                            'source_detail',
                            'gateway_token',
                            'handling_fee',
                            'cancelled_at'
                        ];
    protected $casts = ['options' => 'array', 'date' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'transactions';
    protected static $logName = 'transaction';
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;
    protected static $ignoreChangedAttributes = ['updated_at'];
    protected $appends = ['voucher_number'];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function account()
    {
        return $this->belongsTo('App\Models\Finance\Account');
    }

    public function paymentMethod()
    {
        return $this->belongsTo('App\Models\Configuration\Finance\Transaction\PaymentMethod');
    }

    public function registration()
    {
        return $this->belongsTo('App\Models\Student\Registration');
    }

    public function transactionGroup()
    {
        return $this->belongsTo('App\Models\Finance\Transaction\Transaction', 'transaction_group_id');
    }

    public function transactionGroups()
    {
        return $this->hasMany('App\Models\Finance\Transaction\Transaction', 'transaction_group_id');
    }

    public function studentFeeRecord()
    {
        return $this->belongsTo('App\Models\Student\StudentFeeRecord');
    }

    public function studentFeeRecordDetails()
    {
        return $this->hasMany('App\Models\Student\StudentFeeRecordDetail');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function getVoucherNumberAttribute()
    {
        return $this->prefix.''.$this->number;
    }
    
    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }
    
    public function scopeFilterByAccountId($q, $account_id)
    {
        if (! $account_id) {
            return $q;
        }

        return $q->where('account_id', '=', $account_id);
    }

    public function scopeIsNotCancelled($q)
    {
        return $q->where('is_cancelled',0);
    }
    
    public function scopeFilterByDate($q, $date)
    {
        if (! $date) {
            return $q;
        }

        return $q->where('date', '=', $date);
    }
    
    public function scopeFilterByType($q, $type)
    {
        return $q->where('type', '=', $type);
    }
    
    public function scopeFilterByReferenceNumber($q, $reference_number, $strict = 0)
    {
        if (! $reference_number) {
            return $q;
        }

        return ($strict) ? $q->where('reference_number', '=', $reference_number) : $q->where('reference_number', 'like', '%'.$reference_number.'%');
    }

    public function scopeFilterByCancelled($q, $is_cancelled = 0)
    {
        return $q->whereIsCancelled($is_cancelled);
    }
    
    public function scopeFilterByInstrumentNumber($q, $instrument_number, $strict = 0)
    {
        if (! $instrument_number) {
            return $q;
        }

        return ($strict) ? $q->where('instrument_number', '=', $instrument_number) : $q->where('instrument_number', 'like', '%'.$instrument_number.'%');
    }
    
    public function scopeFilterByHead($q, $head)
    {
        return $q->where('head', '=', $head);
    }

    public function scopeFilterBySession($q)
    {
        return $q->where('date', '>=', getStartOfDate(config('config.default_academic_session.start_date')))->where('date', '<=', getEndOfDate(config('config.default_academic_session.end_date')));
    }

    public function scopeDateBetween($q, $dates)
    {
        if ((! $dates['start_date'] || ! $dates['end_date']) && $dates['start_date'] <= $dates['end_date']) {
            return $q;
        }

        return $q->where('date', '>=', getStartOfDate($dates['start_date']))->where('date', '<=', getEndOfDate($dates['end_date']));
    }
}
