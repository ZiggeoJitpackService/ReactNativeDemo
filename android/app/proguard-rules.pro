# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-keep class android.support.v7.widget.FitWindowsFrameLayout { *; }
-dontwarn android.support.v7.widget.FitWindowsFrameLayout
-keep class androidx.appcompat.widget.FitWindowsFrameLayout { *; }
-dontwarn androidx.appcompat.widget.FitWindowsFrameLayout
-keep class android.support.design.** { *; }
-keep class android.support.multidex.MultiDexApplication { *; }
-keep class androidx.multidex.MultiDexApplication { *; }
-keep class android.support.design.internal.BaselineLayout { *; }
-dontwarn android.support.design.internal.BaselineLayout
-keep class com.google.android.material.internal.BaselineLayout { *; }
-dontwarn com.google.android.material.internal.BaselineLayout
-keep class com.google.firebase.provider.FirebaseInitProvider { *; }
-keep class androidx.appcompat.widget.AlertDialogLayout { *; }
-keep class androidx.appcompat.widget.DialogTitle { *; }
-keep class androidx.appcompat.widget.ButtonBarLayout { *; }
-keep class android.support.v7.widget.AlertDialogLayout { *; }
-keep class android.support.v7.widget.DialogTitle { *; }
-keep class android.support.v7.widget.ButtonBarLayout { *; }
-keep class androidx.core.app.CoreComponentFactory { *; }
-keep class androidx.work.** { *; }
-keep class com.google.mediapipe.** { *; }
-keep class com.ziggeo.androidsdk.analytics.** { *; }

-keep class androidx.core.app.** { *; }
-keep class androidx.work.impl.background.systemjob.SystemJobService { *; }
-keepclassmembers class * extends androidx.work.Worker {
public <init>(android.content.Context,androidx.work.WorkerParameters);
}

-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**
-keep class com.microsoft.windowsazure.messaging.** { *; }
-dontwarn com.microsoft.windowsazure.messaging.**
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**
-keep class android.support.v7.widget.** { *; }
-dontwarn android.support.v7.widget.**
-keep class android.support.v4.widget.Space { *; }
-dontwarn android.support.v4.widget.Space

-injars  bin/classes
-injars  libs
-outjars bin/classes-processed.jar
-libraryjars /usr/local/java/android-sdk/platforms/android-9/android.jar

-dontpreverify
-repackageclasses ''
-allowaccessmodification
-optimizations !code/simplification/arithmetic
-keepattributes *Annotation*

-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider

-keep public class * extends android.view.View {
public <init>(android.content.Context);
public <init>(android.content.Context, android.util.AttributeSet);
public <init>(android.content.Context, android.util.AttributeSet, int);
public void set*(...);}

-keepclasseswithmembers class * {}

-keepclassmembers class * implements android.os.Parcelable {
static android.os.Parcelable$Creator CREATOR;
}
